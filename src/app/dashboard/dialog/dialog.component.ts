import {
  Component,
  Inject,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { environment } from 'src/environments/environment';
import { MetamaskService } from '../../services/metamask.service';
import { ProductService } from '../../services/product.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OrderService } from '../../services/order.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { CollectionService } from 'src/app/services/collection.service';
import { MatAccordion } from '@angular/material/expansion';
import { Title } from '@angular/platform-browser';
import { NgxMatIntlTelInputComponent } from 'ngx-mat-intl-tel-input';
import { Web3Service } from 'src/app/services/web3.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { NftService } from 'src/app/services/nft.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class dialogComponent implements OnInit {
  @ViewChild('phone')
  phone!: NgxMatIntlTelInputComponent;

  @ViewChild(MatAccordion)
  accordion: MatAccordion = new MatAccordion();
  dialogConfig = new MatDialogConfig();
  'dialogueReference': MatDialogRef<dialogComponent>;
  displayedColumns = [
    'productImg',
    'productName',
    'orderId',
    'dateandtime',
    'productQty',
    'id',
  ];
  dataSource: Array<any> = [];
  metamaskContent = false;
  alertBox = false;
  marketPlace = false;
  hideMarketPlace = false;
  emailSubscribe = false;
  shippedProducts = false;
  panelOpenState = false;
  dialogRef: any;
  map = new Map();
  active_index: number = 0;
  size_detail: Array<any> = [];
  current_price: number = 0;
  colours: Array<any> = [];
  images: Array<any> = [];
  isProductEligible: boolean = false;
  flag: boolean = false;
  defaultProductSize: any;
  metamaskWalletAddress: string = '';
  shippingDetailsSaved: boolean = false;
  loader: boolean = false;
  createdOrderId: string = '';
  orderDetailForIncompleteShippingDetail: any = {};
  orderDetailForIncompleteShippingDetailFlag: boolean = false;
  quantityForm = new FormGroup({
    product_quantity: new FormControl(0, [Validators.required]),
  });
  purchaseQty: number = 0;
  data: any = {};
  productVariantId: any = '';
  txndetails: Array<any> = [];
  remainingPay: any;
  public tokenId = null;

  shippingFormGroup = new FormGroup({
    _id: new FormControl(''),
    name: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z,-.]{1,}(?: [a-zA-Z,-.]+){0,5}$'),
    ]),
    streetAddress: new FormControl('', [Validators.required]),
    city: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z ]*$'),
    ]),
    state: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z ]*$'),
    ]),
    zip: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]*'),
    ]),
    country: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z ]*$'),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$'),
    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$'),
    ]),
  });
  nftForm = new FormGroup({
    tokenId: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[0-9]+(\.[0-9]{1,8})?$/),
    ]),
    address: new FormControl(''),
    title: new FormControl('', [Validators.required]),
  });
  collectionList: any = {};
  colorList: any = {};
  sizeList: any = {};
  materialList: any = {};

  get controls() {
    return this.shippingFormGroup.controls;
  }
  get control() {
    return this.nftForm.controls;
  }
  current_qty: number = 0;
  remaining_qty: number = 0;
  imgUrl = environment.apiEndPoint + '/upload/bundle/';
  selectedVariant: any = '';
  selectedSizeInfoId: any = '';
  selectedSizeRefId: any = '';
  shippingDetails: any = [];
  shippingDetailsObj: any = {};
  selectedVariantObj: any;
  nftAddress: any = [];

  productObj: any = {
    walletId: '',
    productId: '',
    productVariantId: '',
    quantity: 0,
    price: 0,
    cost: 0,
    pendingAmount: 0,
    sizeId: '',
    sizeRefId: '',
    shippingId: '',
    shippingDetails: {
      name: '',
      streetAddress: '',
      city: '',
      state: '',
      zip: '',
      country: '',
      phone: '',
    },
    txnHash: [],
    status: '',
    collectionAddress: '',
    tokenId: '',
  };
  nftObj: any = {
    title: '',
    tokenId: '',
  };

  orderLevel = 0;
  orderData: any = {};
  collectionAddress: any;
  tokenNo: any;
  isReadMore = true;

  addressTitle = 'Add New Address';
  quantityError = false;
  sizeIndex = '';
  colurIndex = '';
  pending = false;

  constructor(
    public dialog: MatDialog,
    private metaMaskService: MetamaskService,
    private webService: Web3Service,
    private productService: ProductService,
    private snackbar: MatSnackBar,
    private orderService: OrderService,
    private actroute: ActivatedRoute,
    private collectionsService: CollectionService,
    private router: Router,
    private titleService: Title,
    private spinner: NgxSpinnerService,
    private nftService: NftService
  ) {
    this.productVariantId = this.actroute.snapshot.paramMap.get('id');
    if (this.productVariantId) {
      this.callMultipleAPIS();
    }
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  callMultipleAPIS() {
    const productInfo = this.productService.getProductById(
      this.productVariantId
    );
    const collection = this.collectionsService.getAllCollections();
    const colors = this.collectionsService.getColors();
    const sizes = this.collectionsService.getSizes();
    const materials = this.collectionsService.getMaterials();
    const shippingDetails = this.productService.getUserShippingDetails(
      localStorage.getItem('walletId')
    );

    const promise = new Promise((resolve, reject) => {
      try {
        let allResults = forkJoin([
          productInfo,
          collection,
          colors,
          sizes,
          materials,
          shippingDetails,
        ]).subscribe((results: any) => {
          if (results[1].length > 0) {
            results[1].forEach((element: any) => {
              this.collectionList[element._id] = element.category;
            });
          }
          if (results[2].length > 0) {
            results[2].forEach((element: any) => {
              this.colorList[element._id] = element.color;
            });
          }
          if (results[3].length > 0) {
            results[3].forEach((element: any) => {
              this.sizeList[element._id] = element.size;
            });
          }
          if (results[4].length > 0) {
            results[4].forEach((element: any) => {
              this.materialList[element._id] = element.material;
            });
          }

          if (results[5].length > 0) {
            this.shippingDetails = results[5];
            results[5].forEach((element: any) => {
              this.shippingDetailsObj[element._id] = element;
            });
          }
          this.data = results[0];
          this.titleService.setTitle(this.data.name);
          this.formatProduct();
          this.marketPlace = true;
        });
        resolve(allResults);
      } catch (error) {
        reject(error);
      }
    });
    promise
      .then((data: any) => {})
      .catch((err) => {
        console.log(err);
      });
  }

  formatProduct() {
    if (this.data && this.data && this.data.variants) {
      let variants = this.data.variants;
      let varColorId = '';
      for (let i = 0; i < variants.length; i++) {
        if (this.map.has(variants[i].colorId) === false) {
          let arr: Array<any> = [];
          for (let j = 0; j < variants[i].sizeDetails.length; j++) {
            let obj = {
              quantity: variants[i].sizeDetails[j].quantity,
              price: variants[i].sizeDetails[j].price,
              sizeId: variants[i].sizeDetails[j].sizeId,
              variantId: variants[i]._id,
              images: variants[i].images,
              sizeInfoId: variants[i].sizeDetails[j]._id,
              colorId: variants[i].colorId,
              materialId: variants[i].materialId,
              soldQuantity: variants[i].sizeDetails[j].soldQuantity | 0,
            };
            arr.push(obj);
          }
          if (variants[i]._id === this.productVariantId) {
            varColorId = variants[i].colorId;
          }
          this.map.set(variants[i].colorId, arr);
        } else {
          let arr: Array<any> = this.map.get(variants[i].colorId);
          for (let j = 0; j < variants[i].sizeDetails.length; j++) {
            let obj = {
              quantity: variants[i].sizeDetails[j].quantity,
              price: variants[i].sizeDetails[j].price,
              sizeId: variants[i].sizeDetails[j].sizeId,
              variantId: variants[i]._id,
              images: variants[i].images,
              sizeInfoId: variants[i].sizeDetails[j]._id,
              colorId: variants[i].colorId,
              materialId: variants[i].materialId,
              soldQuantity: variants[i].sizeDetails[j].soldQuantity | 0,
            };
            arr.push(obj);
          }
          if (variants[i]._id === this.productVariantId) {
            varColorId = variants[i].colorId;
          }
          this.map.set(variants[i].colorId, arr);
        }
      }
      this.colours = [];
      for (let data of this.map) {
        this.colours.push(data[0]);
      }

      const varIndex = this.colours.indexOf(varColorId);
      this.active_index = varIndex;
      this.getSizeArray(this.colours[varIndex]);
      this.colurIndex = varColorId;
    }
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  }

  getSizeArray(color: string) {
    this.size_detail = this.map.get(color);
    const sizeId = localStorage.getItem('sizeId');
    let price_index = 0;

    if (!this.defaultProductSize) {
      this.defaultProductSize = sizeId;
    }

    let findIndx = this.size_detail
      .map(function (o) {
        return o.sizeId;
      })
      .indexOf(this.defaultProductSize);
    if (findIndx === -1) {
      this.defaultProductSize = '';
    }

    if (this.defaultProductSize) {
      this.sizeIndex = this.defaultProductSize;
      for (let i = 0; i < this.size_detail.length; i++) {
        if (this.size_detail[i].sizeId === this.defaultProductSize) {
          price_index = i;
          break;
        }
      }
      this.current_price = this.size_detail[price_index].price;
      this.current_qty = this.size_detail[price_index].quantity;
      this.remaining_qty =
        this.size_detail[price_index].quantity -
        this.size_detail[price_index].soldQuantity;
      this.images = this.size_detail[price_index].images;
      this.selectedVariant = this.size_detail[price_index].variantId;
      this.selectedSizeInfoId = this.size_detail[price_index].sizeId;
      this.selectedSizeRefId = this.size_detail[price_index].sizeInfoId;
    } else {
      let price_index = 0;
      this.sizeIndex = this.size_detail[price_index].sizeId;
      this.defaultProductSize = this.size_detail[price_index].sizeId;
      this.current_price = this.size_detail[price_index].price;
      this.defaultProductSize = this.size_detail[price_index].sizeId;
      this.current_qty = this.size_detail[price_index].quantity;
      this.remaining_qty =
        this.size_detail[price_index].quantity -
        this.size_detail[price_index].soldQuantity;
      this.images = this.size_detail[price_index].images;
      this.selectedVariant = this.size_detail[price_index].variantId;
      this.selectedSizeInfoId = this.size_detail[price_index].sizeId;
      this.selectedSizeRefId = this.size_detail[price_index].sizeInfoId;
    }
    this.purchaseQty = 0;
  }

  updateChange(event: any) {
    this.quantityError = false;
    if (isNaN(event.value)) {
      this.snackbar.open('Only Number Allowed', 'X', {
        duration: 4000,
        horizontalPosition: 'end',
        panelClass: 'error-snackbar',
      });
      this.purchaseQty = 0;
    } else {
      if (this.remaining_qty >= event.value) {
        this.purchaseQty = event.value;
      }
    }
  }

  increaseQty() {
    this.quantityError = false;
    if (this.remaining_qty > this.purchaseQty) {
      this.purchaseQty++;
    } else {
      this.purchaseQty = this.remaining_qty;
    }
  }

  decreaseQty() {
    if (this.purchaseQty > 0) {
      this.purchaseQty--;
    }
  }

  updateSize(size: any) {
    this.defaultProductSize = size.target.value;
    this.getSizeArray(this.colours[this.active_index]);
  }
  updateIndex(index: any) {
    this.defaultProductSize = '';
    localStorage.removeItem('sizeId');
    const varIndex = this.colours.indexOf(index.target.value);
    this.active_index = varIndex;
    this.getSizeArray(this.colours[this.active_index]);
  }

  async buyNow() {
    try {
      let walletId = localStorage.getItem('walletId');
      if (walletId) {
        this.productObj.walletId = walletId;
        this.productObj.productId = this.data?._id;
        this.productObj.productVariantId = this.selectedVariant;
        this.productObj.quantity = Number(this.purchaseQty);
        this.productObj.sizeId = this.selectedSizeInfoId;
        this.productObj.sizeRefId = this.selectedSizeRefId;
        this.productObj.price = Number(this.current_price);
        this.productObj.cost = Number(
          (Number(this.current_price) * Number(this.purchaseQty)).toFixed(6)
        );
        if (this.purchaseQty > 0) {
          this.spinner.hide();
          this.orderLevel = 5;
          this.scrollToTop();
          this.checkNFTDetails();
        } else {
          this.spinner.hide();
          this.quantityError = true;
          this.snackbar.open('Please Select Product Quantity', 'X', {
            duration: 4000,
            horizontalPosition: 'end',
            panelClass: 'error-snackbar',
          });
        }
      } else {
        this.spinner.hide();
        this.snackbar.open('Please connect your metamask', 'X', {
          duration: 4000,
          horizontalPosition: 'end',
          panelClass: 'error-snackbar',
        });
      }
    } catch (error) {
      this.spinner.hide();
      this.snackbar.open('Something Went Wrong', 'X', {
        duration: 4000,
        horizontalPosition: 'end',
        panelClass: 'error-snackbar',
      });
    }
  }

  addShippingDetail() {
    this.spinner.show();
    if (this.productObj.shippingId === '') {
      this.spinner.hide();
      this.productObj.shippingDetails = this.shippingFormGroup.value;
    }
    const { tokenId, address } = this.nftForm.value;
    const collObj = this.nftAddress.filter(
      (item: any) => item.address === address
    );
    this.collectionAddress = collObj[0].title;
    this.tokenNo = tokenId;
    this.orderLevel = 2;

    this.spinner.hide();
  }

  async sendTransaction() {
    this.spinner.show();

    try {
      let transaction = await this.metaMaskService.sendTransaction(
        this.pending === true
          ? Number(this.remainingPay)
          : Number(this.productObj.cost)
      );
      if (transaction) {
        this.productObj.txnHash = [transaction];
        this.txndetails = transaction;
        this.productObj.status = 'complete';
        this.productObj.collectionAddress = this.collectionAddress;
        this.productObj.tokenId = this.tokenNo;
        const details = await this.webService.getTransactionResults(
          transaction
        );
        if (details) {
          this.spinner.hide();
          const balanceDetails: any =
            await this.webService.getTransactionDetails(
              details.transactionHash
            );
          if (this.productObj.cost > balanceDetails) {
            this.remainingPay = this.productObj.cost - balanceDetails;
            this.pending = true;
            this.productObj.pendingAmount = this.remainingPay;
            this.productObj.status = 'pending';
          }
          this.createOrder();
        }
      } else {
        this.spinner.hide();
        this.snackbar.open('Something went wrong!', 'X', {
          duration: 4000,
          panelClass: 'error-snackbar',
          horizontalPosition: 'end',
        });
      }
    } catch (e: any) {
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

  async createOrder() {
    this.orderService.createOrder(this.productObj).subscribe(
      async (data) => {
        this.spinner.hide();
        this.snackbar.open('Order Placed Successfully', 'X', {
          duration: 4000,
          horizontalPosition: 'end',
          panelClass: 'success-order',
        });
        await this.getOrderById(data._id);
        this.txndetails[data.txnHash];
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

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    autoplay: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };

  chooseShippingAddress(shippingId: string) {
    this.addressTitle = 'Add New Address';
    this.shippingFormGroup.reset();
    this.accordion.closeAll();
    this.phone.reset();
  }

  resetShipping() {
    this.productObj.shippingId = '';
  }
  getOrderById(orderId: string) {
    this.orderService.getOrderById(orderId).subscribe(
      (success) => {
        this.orderData = success;
        this.orderLevel = 3;
      },
      (error) => {
        this.snackbar.open(error.error.message, 'X', {
          duration: 4000,
          horizontalPosition: 'end',
          panelClass: 'error-snackbar',
        });
      }
    );
  }

  showText() {
    this.isReadMore = !this.isReadMore;
  }

  ngAfterViewInit() {
    window.scrollTo(-100, -100);
  }
  scrollToTop() {
    window.scrollTo(0, 0);
  }
  editShipping(shipObj: any) {
    this.addressTitle = 'Edit Address';
    this.shippingFormGroup.patchValue(shipObj);
    this.panelOpenState = true;
  }

  deleteShipping(shipId: any) {
    if (confirm('Are you sure to delete this shipping address?')) {
      this.orderService.deleteShippingById(shipId).subscribe(
        (success) => {
          this.snackbar.open('Shipping Address deleted', 'X', {
            duration: 4000,
            horizontalPosition: 'end',
            panelClass: 'success-order',
          });
          this.productObj.shippingId = '';
          this.getUserShippingAddressesByAccount();
        },
        (error) => {
          this.snackbar.open(error.error.message, 'X', {
            duration: 4000,
            horizontalPosition: 'end',
            panelClass: 'error-snackbar',
          });
        }
      );
    }
  }

  getUserShippingAddressesByAccount() {
    this.productService
      .getUserShippingDetails(localStorage.getItem('walletId'))
      .subscribe(
        (success) => {
          if (success.length > 0) {
            this.shippingDetails = success;
            success.forEach((element: any) => {
              this.shippingDetailsObj[element._id] = element;
            });
          } else {
            this.shippingDetails = [];
            this.shippingDetailsObj = {};
          }
        },
        (error) => {
          this.snackbar.open(error.error.message, 'X', {
            duration: 4000,
            horizontalPosition: 'end',
            panelClass: 'error-snackbar',
          });
        }
      );
  }
  checkNFTDetails() {
    this.nftService.getMintAddress().subscribe(
      (data: []) => {
        if (data.length > 0) {
          this.nftAddress = data;
        } else {
          this.nftAddress = [];
        }
      },
      (error) => {
        this.snackbar.open(error.error.message, 'X', {
          duration: 4000,
          horizontalPosition: 'end',
          panelClass: 'error-snackbar',
        });
      }
    );
  }

  onChange(e: any) {
    // this.nftForm.get('nftAddress')?.setValue(e.value)
    this.nftForm.get('title')?.setValue(e.value);
  }

  async checkOwner() {
    try {
      if (this.nftForm.invalid) {
        return;
      }
      this.spinner.show();

      const { tokenId, address, title } = this.nftForm.value;
      const owner = await this.webService.whoOwnThisToken(tokenId, address);
      if (owner) {
        const userAddress = localStorage.getItem('walletId');
        if (userAddress) {
          if (owner?.toUpperCase() === userAddress?.toUpperCase()) {
            this.spinner.hide();
            this.orderLevel = 1;
          } else {
            this.spinner.hide();
            this.snackbar.open('Token not found in this wallet', 'X', {
              duration: 4000,
              horizontalPosition: 'end',
              panelClass: 'error-snackbar',
            });
          }
        } else {
          this.spinner.hide();
          this.snackbar.open('Please connect your metamask', 'X', {
            duration: 4000,
            horizontalPosition: 'end',
            panelClass: 'error-snackbar',
          });
        }
      } else {
        this.spinner.hide();
        this.snackbar.open('Token not found in this wallet', 'X', {
          duration: 4000,
          horizontalPosition: 'end',
          panelClass: 'error-snackbar',
        });
      }
    } catch (e) {
      this.spinner.hide();
      this.snackbar.open('Something went wrong, Please try another', 'X', {
        duration: 4000,
        horizontalPosition: 'end',
        panelClass: 'error-snackbar',
      });
    }
  }
}
