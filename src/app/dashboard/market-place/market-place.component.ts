import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';
import { ProductService } from 'src/app/services/product.service';
import { dialogComponent } from '../dialog/dialog.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { MetamaskService } from 'src/app/services/metamask.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CollectionService } from 'src/app/services/collection.service';
import { forkJoin, Subject, Subscription } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Title } from '@angular/platform-browser';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
@Component({
  selector: 'app-market-place',
  templateUrl: './market-place.component.html',
  styleUrls: ['./market-place.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MarketPlaceComponent implements OnInit, OnDestroy  {
  isExpandedView: boolean = true;
  private subject: Subject<string> = new Subject();
  public modelSubscription: Subscription = new Subscription;
  dialogConfig = new MatDialogConfig();
  'dialogueReference': MatDialogRef<dialogComponent>;

  selectedOption: string = 'AllProducts';

  AllCollections: Array<any> = [];
  currentCollection: string = 'All';
  collectionId: string = '';

  imgUrl = environment.apiEndPoint;

  public filterForm: any;

  public priceList: Array<any> = [
    { description: 'Upto 0.2 Eth', value: '0.2', checkedVal: false },
    { description: '0.2 - 0.5 Eth', value: '0.2-0.5', checkedVal: false },
    { description: 'Above 0.5 ETH', value: '0.5', checkedVal: false },
  ];
  collectionList: any;
  colorList: any;
  sizeList: any;
  materialList: any;
  stockList: any = [];

  productListData: Array<any> = [];
  pageEvent: PageEvent = new PageEvent();
  pageSizeOptions: number[] = [2, 4, 5, 10, 15, 20, 50];
  Page = 0;
  Size = 10;
  recordCount = 0;

  panelOpenState = false;

  resultflag = false;
  excludeStocket = false;

  constructor(
    public dialog: MatDialog,
    private productService: ProductService,
    private spinner: NgxSpinnerService,
    private snackbar: MatSnackBar,
    private router: Router,
    private fb: FormBuilder,
    private collectionsService: CollectionService,
    private titleService: Title
  ) {
    this.titleService.setTitle('Shop');
    this.callMultipleAPIS();
    this.filterForm = this.fb.group({
      searchTxt: [''],
      category: ['All'],
      sorting: ['AllProducts'],
      filterPrice: new FormArray([]),
      filterSize: new FormArray([]),
      filterColor: new FormArray([]),
      filterMaterial: new FormArray([]),
      filterStock: [false],
      perpage: [0],
      page: [0],
    });
  }

  ngOnInit(): void {
    this.getAllProducts();
    this.checkMediaQuery();
  }

  callMultipleAPIS() {
    const collection = this.collectionsService.getAllCollections();
    const colors = this.collectionsService.getColors();
    const sizes = this.collectionsService.getSizes();
    const materials = this.collectionsService.getMaterials();

    const promise = new Promise((resolve, reject) => {
      try {
        let allResults = forkJoin([
          collection,
          colors,
          sizes,
          materials,
        ]).subscribe((results: any) => {
          if (results[0].length > 0) {
            this.collectionList = [];
            this.collectionList.push({ _id: 'All', category: 'All' });
            results[0].forEach((element: any) => {
              this.collectionList.push(element);
            });
          }
          if (results[1].length > 0) {
            this.colorList = [];
            results[1].forEach((element: any) => {
              this.colorList.push({ ...{ checkedVal: false }, ...element });
            });
          }
          if (results[2].length > 0) {
            this.sizeList = [];
            results[2].forEach((element: any) => {
              this.sizeList.push({ ...{ checkedVal: false }, ...element });
            });
          }
          if (results[3].length > 0) {
            this.materialList = [];
            results[3].forEach((element: any) => {
              this.materialList.push({ ...{ checkedVal: false }, ...element });
            });
          }
        });
        resolve(allResults);
      } catch (error) {
        reject(error);
      }
    });
    promise
      .then((data: any) => {
        //this.getEditProduct();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  viewAllProducts() {
    this.reset();
    this.currentCollection = 'All';
    this.collectionId = '';
    this.selectedOption = 'AllProducts';
    this.getAllProducts();
  }

  getCollections() {
    this.productService.getCollections().subscribe(
      (data) => {
        this.AllCollections = [];
        this.AllCollections.push({ _id: 'All', category: 'All' });
        for (let i = 0; i < data.length; i++) {
          this.AllCollections.push(data[i]);
        }
      },
      (error) => {
        //console.log('error', error);
      }
    );
  }

  // dialog box for user connect to metamask wallet
  showMetamaskContent() {
    if (!localStorage.getItem('walletId')) {
      return;
    }

    this.dialogueReference = this.dialog.open(dialogComponent, {
      panelClass: 'custom-modalbox',
      disableClose: true,
      data: (this.dialogConfig.data = {
        metamaskContent: false,
      }),
    });

    this.dialogueReference.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.reset();
    });
  }

  filterCollection(collection: any) {
    this.currentCollection = collection.category;
    this.Page = 0;
    this.Size = 10;
    if (collection.category === 'All') {
      this.collectionId = '';
      this.productListData = [];
      this.getAllProducts();
    } else {
      this.collectionId = collection._id;
      this.productListData = [];
      this.getAllProducts();
    }
  }

  getAllProducts() {
    this.spinner.show();
    this.resultflag = false;
    this.filterForm.patchValue({
      perpage: this.Size,
      page: this.Page,
    });
    this.productService.getProducts(this.filterForm.value).subscribe(
      async (result) => {
        this.productListData = result.productDetail;
        this.recordCount = result.totalProducts;
        this.spinner.hide();
        this.resultflag = true;
      },
      (error) => {
        this.spinner.hide();
        this.resultflag = true;
      }
    );
  }

  showProductModal(data: any) {
    // console.log('data', data);
    localStorage.setItem('sizeId', data?.sizeDetails[0]?._id);
    this.router.navigate(['/product/' + data?._id]);
  }

  reset() {
    this.currentCollection = 'All';
    this.collectionId = '';
    this.productListData = [];
  }

  updateSelectedOption(data: string) {
    this.selectedOption = data;
    this.reset();
    this.getAllProducts();
  }

  searchData(event: any) {
    this.reset();
    this.modelSubscription = this.filterForm.get('searchTxt').valueChanges
    .pipe(debounceTime(800),
          distinctUntilChanged()
     )
    .subscribe((value: any) => {
      this.filterForm.value = value;
      this.getAllProducts();
    })

  }

  ngOnDestroy() {
    this.modelSubscription.unsubscribe();
  }
  onCheckChange(event: any, flag: string) {
    const formArrayList: FormArray = this.filterForm.get(flag) as FormArray;
    /* Selected */
    if (event.checked) {
      // Add a new control in the arrayForm
      if (flag !== 'filterStock') {
        formArrayList.push(new FormControl(event.source.value));
      }
      switch (flag) {
        case 'filterPrice':
          this.priceList.map((item: any) =>
            item.value === event.source.value
              ? (item.checkedVal = true)
              : item.checkedVal
          );
          break;
        case 'filterSize':
          this.sizeList.map((item: any) =>
            item._id === event.source.value
              ? (item.checkedVal = true)
              : item.checkedVal
          );
          break;
        case 'filterColor':
          this.colorList.map((item: any) =>
            item._id === event.source.value
              ? (item.checkedVal = true)
              : item.checkedVal
          );
          break;
        case 'filterMaterial':
          this.materialList.map((item: any) =>
            item._id === event.source.value
              ? (item.checkedVal = true)
              : item.checkedVal
          );
          break;
        case 'filterStock':
          this.excludeStocket = true;
          this.filterForm.get('filterStock').patchValue(true);
      }
    } else {
      /* unselected */
      // find the unselected element
      if (flag !== 'filterStock') {
        let i: number = 0;

        formArrayList.controls.forEach((ctrl) => {
          if (ctrl.value == event.source.value) {
            // Remove the unselected element from the arrayForm
            formArrayList.removeAt(i);
            return;
          }
          i++;
        });
      } else {
        this.excludeStocket = false;
        this.filterForm.get('filterStock').patchValue(false);
      }
    }
    this.getAllProducts();
  }

  handlePageEvent(event: PageEvent) {
    this.Page = event.pageIndex;
    this.Size = event.pageSize;
    this.getAllProducts();
  }

  ResetFilters() {
    this.currentCollection = 'All';
    this.collectionId = '';
    this.filterForm.patchValue({
      searchTxt: '',
      category: 'All',
      sorting: 'AllProducts',
    });
    this.Page = 0;
    this.Size = 10;
    this.removeAllelement('filterPrice');
    this.removeAllelement('filterSize');
    this.removeAllelement('filterColor');
    this.removeAllelement('filterMaterial');
    this.removeAllelement('filterStock');
    this.priceList.map((item: any) => (item.checkedVal = false));
    this.sizeList.map((item: any) => (item.checkedVal = false));
    this.colorList.map((item: any) => (item.checkedVal = false));
    this.materialList.map((item: any) => (item.checkedVal = false));
    this.stockList.map((item: any) => (item.checkedVal = false));
    this.getAllProducts();
  }
  removeAllelement(flag: string) {
    const formArrayList: FormArray = this.filterForm.get(flag) as FormArray;
    let i: number = 0;

    if (formArrayList.controls?.length > 0) {
      formArrayList.controls.forEach((ctrl) => {
        // Remove the unselected element from the arrayForm
        formArrayList.removeAt(i);
        return;
        i++;
      });
    }
  }

  checkMediaQuery() {
    if (window.innerWidth > 768) {
      this.isExpandedView = true;
    } else {
      this.isExpandedView = false;
    }
  }
}
