import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { NgxSpinnerModule } from 'ngx-spinner';

import { MaterialModule } from '../material/material.module';
import { TmNgOdometerModule } from 'tm-ng-odometer';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { UsernameComponent } from './homepage/components/username/username.component';
import { NftsComponent } from './staking/components/nfts/nfts.component';

@NgModule({
  declarations: [
   
    
  ],
  imports: [CommonModule,
     IndexRoutingModule,
      NgxSpinnerModule,
      MaterialModule,
      TmNgOdometerModule,
      CarouselModule,
      
    ],

})
export class IndexModule {}
