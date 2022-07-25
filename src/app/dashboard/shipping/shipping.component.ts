import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss'],
})
export class ShippingComponent implements OnInit {
  shippingDetails: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dailogRef: MatDialogRef<ShippingComponent>
  ) {
    if (data) {
      this.shippingDetails = data.shippingDetails;
      console.log(this.shippingDetails);
    }
  }

  ngOnInit(): void {}

  closeDialog() {
    this.dailogRef.close();
  }
}
