import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MetamaskService } from 'src/app/services/metamask.service';
import { OrderService } from 'src/app/services/order.service';
import { Web3Service } from 'src/app/services/web3.service';
import { environment } from 'src/environments/environment';
import { ShippingComponent } from '../shipping/shipping.component';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OrderHistoryComponent implements OnInit {
  dialogConfig = new MatDialogConfig();
  'dialogueReference': MatDialogRef<ShippingComponent>;
  displayedColumns: string[] = [
    'orderId',
    'createdAt',
    'quantity',
    'collection',
    'tokenId',
    'status',
    'orderCost',
    'description',
    'size',
    'color',
    'action',
    'txnHash',
  ];
  imgUrl = environment.apiEndPoint + '/upload/bundle/';
  resultflag = false;
  loader = false;

  dataSource: Array<any> = [];

  public filterForm: any;

  orderListData: Array<any> = [];
  pageEvent: PageEvent = new PageEvent();
  pageSizeOptions: number[] = [5, 10, 15, 20, 50];
  Page = 0;
  Size = 5;
  recordCount = 0;
  balanceDetails: any;

  hashLink = environment.networlink;
  constructor(
    private orderService: OrderService,
    private router: Router,
    private fb: FormBuilder,
    private spinner: NgxSpinnerService,
    private snackbar: MatSnackBar,
    private titleService: Title,
    private metaMaskService: MetamaskService,
    private web3Service: Web3Service,
    public dialog: MatDialog,

  ) {
    this.titleService.setTitle('Your Orders');
  }

  ngOnInit(): void {
    this.filterForm = this.fb.group({
      walletId: [localStorage.getItem('walletId')],
      searchTxt: [''],
      perpage: [0],
      page: [0],
    });
    this.getOrderHistory();
  }

  getOrderHistory() {
    const userAddress = localStorage.getItem('walletId');
    if (userAddress){
      this.spinner.show();
      this.filterForm.patchValue({
        walletId: localStorage.getItem('walletId'),
        perpage: this.Size,
        page: this.Page,
      });
      this.resultflag = false;
      this.orderService.getAllOrders(this.filterForm.value).subscribe(
        (success) => {
          const data = success.orderDetail;
          let formated_orders = [];
          for (let i = 0; i < data.length; i++) {
            let obj = {
              image:
                this.imgUrl +
                data[i]?.variants._id +
                '/' +
                data[i]?.variants.images[0],
              orderId: data[i]?.orderId,
              createdAt: data[i]?.createdAt,
              quantity: data[i]?.quantity,
              orderCost: data[i]?.cost,
              orderstatus: data[i]?.status,
              pendingAmount: data[i]?.pendingAmount,
              _id: data[i]?._id,
              txnHash: data[i]?.txnHash,
              description: data[i]?.productDetail.name,
              color: data[i]?.colorob.color,
              size: data[i]?.sizeob.size,
              material: data[i]?.materialob.material,
              shipping: data[i]?.shippingDetail,
              collection: data[i]?.collectionAddress,
              tokenId: data[i]?.tokenId
  
            };
            formated_orders.push(obj);
          }
          this.dataSource = formated_orders;
          this.resultflag = true;
          this.recordCount = success.orderCount;
          this.spinner.hide();
        },
        (error) => {
          this.resultflag = true;
          this.spinner.hide();
          this.snackbar.open(error.error.message, 'X', {
            duration: 4000,
            horizontalPosition: 'end',
            panelClass: 'error-snackbar',
          });
        }
      );
    } else {
      this.resultflag = true;
        this.spinner.hide();
        this.snackbar.open('Please connect your metamask', 'X', {
          duration: 4000,
          horizontalPosition: 'end',
          panelClass: 'error-snackbar',
        });
    }
   
  }

  ViewDetails(data: any) {
    this.router.navigateByUrl('/order/' + data._id);
  }
  handlePageEvent(event: PageEvent) {
    this.Page = event.pageIndex;
    this.Size = event.pageSize;
    this.getOrderHistory();
  }

  async sendTransaction(element: any) {
    this.spinner.show();
    try {
      let transaction = await this.metaMaskService.sendTransaction(
         Number(element.pendingAmount.toFixed(6)))
        if (transaction) {
          element.txnHash = [transaction];
          element.orderCost = element.orderCost
          element.pendingAmount =Number(element.pendingAmount.toFixed(6));
          const results = await this.web3Service.getTransactionResults(transaction);
          if (results) {
            this.snackbar.open('Transaction has been Confirmed', 'X', {
              duration: 4000,
              panelClass: 'success-order',
              horizontalPosition: 'end',
            });  
            this.balanceDetails = await this.web3Service.getTransactionDetails(transaction)
          if (Number(element.pendingAmount.toFixed(6))> this.balanceDetails){
          element.orderstatus = "pending"
          element.pendingAmount =  Number(element.pendingAmount.toFixed(6))  - this.balanceDetails;
          } else {
            element.orderstatus = "complete"
            element.pendingAmount = 0;
          }
        } else {
          this.spinner.hide();
          this.snackbar.open('Transaction has not been Confirmed', 'X', {
            duration: 4000,
            panelClass: 'error-snackbar',
            horizontalPosition: 'end',
          }); 
        }
          await  this.orderService.updatePendingPayment(element).subscribe(
            async (data) => {
              if (data){
                if (Number(data.pendingAmount.toFixed(6))>this.balanceDetails){
                  this.spinner.hide();
                  this.getOrderHistory();
                  this.snackbar.open(`Your Pending Amount  is ${data.pendingAmount}`, 'X', {
                    duration: 4000,
                    panelClass: 'error-snackbar',
                    horizontalPosition: 'end',
                  });  
                } else {
                  this.spinner.hide();
                  this.getOrderHistory();
                  this.snackbar.open('Transaction has been Confirmed', 'X', {
                    duration: 4000,
                    panelClass: 'success-order',
                    horizontalPosition: 'end',
                  }); 
                }
              }
         
                           
             },
             (error) => {
              this.spinner.hide();
               this.snackbar.open(error.error.message, 'X', {
                 duration: 4000,
                 horizontalPosition: 'end',
               });
             }
           );
        }
        else {
          this.spinner.hide();
          this.snackbar.open('Something went wrong!', 'X', {
            duration: 4000,
            panelClass: 'error-snackbar',
            horizontalPosition: 'end',
          });
        }
    }
    catch (e: any) {
      this.spinner.hide();
      let errormsg = 'Something Went Wrong in Transaction';
      if (e.code === 4001) {
        errormsg = 'Transactions has been cancelled';
      }
      this.snackbar.open(errormsg, 'X', {
        panelClass: 'error-snackbar',
        duration: 4000,
        horizontalPosition: 'end',
      });
    }
 
  }

  searchOrder() {
    this.getOrderHistory();
  }

  resetProductSearchForm() {
    this.filterForm.reset();
    this.getOrderHistory();
  }
  viewTxn(element: any){
  }
  showShippingDetails(obj: any){
    this.dialogueReference = this.dialog.open(ShippingComponent, {
      panelClass: 'custom-shipping-modal-box',
      disableClose: true,
      data: (this.dialogConfig.data = {
        shippingDetails: obj,
        routing: '/order-list',
      }),
    });

    this.dialogueReference.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
