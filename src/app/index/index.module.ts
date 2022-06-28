import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { StakeComponent } from './staking/stake.component';
import { MaterialModule } from '../material/material.module';
import { TmNgOdometerModule } from 'tm-ng-odometer';
import { CarouselModule } from 'ngx-owl-carousel-o';
@NgModule({
  declarations: [
    StakeComponent
    ],
  imports: [CommonModule,
     IndexRoutingModule,
      NgxSpinnerModule,
      MaterialModule,
      TmNgOdometerModule,
      CarouselModule
    ],

})
export class IndexModule {}
