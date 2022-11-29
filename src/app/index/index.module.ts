import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { NgxSpinnerModule } from 'ngx-spinner';

import { MaterialModule } from '../material/material.module';
import { TmNgOdometerModule } from 'tm-ng-odometer';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { UsernameComponent } from './homepage/components/username/username.component';
import { NftsComponent } from './staking/components/nfts/nfts.component';
import { StakedNFTSComponent } from './staking/components/staked-nfts/staked-nfts.component';
import { latestProComponent} from './latestPro/latestPro.component';
import { ProjectpageComponent } from './projectpage/projectpage.component';
import { ApplicationpageComponent } from './applicationpage/applicationpage.component';
import { ProjectsComponent } from './projects/projects.component';
import { AllprojectsComponent } from './allprojects/allprojects.component';
import { SearchPipe } from './allprojects/search.pipe';



@NgModule({
  declarations: [
   
  

  
   
  
    
  
    SearchPipe,
                                      
  ],
  imports: [CommonModule,
     IndexRoutingModule,
      NgxSpinnerModule,
      MaterialModule,
      TmNgOdometerModule,
      
      
    ],

})
export class IndexModule {}
