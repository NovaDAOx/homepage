import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { MaterialModule } from '../material/material.module';
import { HomeComponent } from './home/home.component';
import { MarketPlaceComponent } from './market-place/market-place.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { ReactiveFormsModule } from '@angular/forms';

// Import library module
import { NgxSpinnerModule } from 'ngx-spinner';
import { MetamaskComponent } from './metamask/metamask.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { NgxMatTelInputModule } from 'ngx-mat-tel-input';
import { ShippingComponent } from './shipping/shipping.component';
@NgModule({
  declarations: [
    LayoutComponent,
    HomeComponent,
    MarketPlaceComponent,
    OrderHistoryComponent,
    MetamaskComponent,
    OrderSummaryComponent,
    ShippingComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    NgxMatTelInputModule,
  ],
})
export class DashboardModule {}
