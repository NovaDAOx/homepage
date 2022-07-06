import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss'],
})
export class OrderSummaryComponent implements OnInit {
  orderId: any = '';
  orderData: any = {};
  constructor(
    private actroute: ActivatedRoute,
    private orderService: OrderService,
    private snackbar: MatSnackBar,
    private titleService: Title
  ) {
    this.titleService.setTitle('Order Summary');
    this.orderId = this.actroute.snapshot.paramMap.get('id');
    if (this.orderId) {
      this.getOrderById();
    }
  }

  ngOnInit(): void {}

  getOrderById() {
    this.orderService.getOrderById(this.orderId).subscribe(
      (success) => {
        this.orderData = success;
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
