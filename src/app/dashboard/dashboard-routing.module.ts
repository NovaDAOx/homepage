import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { dialogComponent } from './dialog/dialog.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { MarketPlaceComponent } from './market-place/market-place.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', pathMatch: 'full', component: HomeComponent },
      { path: 'shop', component: MarketPlaceComponent },
      { path: 'order-history', component: OrderHistoryComponent },
      { path: 'product/:id', component: dialogComponent },
      { path: 'order/:id', component: OrderSummaryComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
