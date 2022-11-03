import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { dialogComponent } from './dashboard/dialog/dialog.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomepageComponent } from './index/homepage/homepage.component';
import { MintComponent } from './index/mint/mint.component';
import { NgxMatIntlTelInputModule } from 'ngx-mat-intl-tel-input';
import { NgxMatTelInputModule } from 'ngx-mat-tel-input';
import { NgxSpinnerModule } from 'ngx-spinner';
import { TmNgOdometerModule } from 'tm-ng-odometer';
import { CSRFInterceptor } from './intercepotor/csrf-interceptor';
import { UsernameComponent } from './index/homepage/components/username/username.component';
import { StakeComponent } from './index/staking/stake.component'
import { NftsComponent } from './index/staking/components/nfts/nfts.component';
import { StakedNFTSComponent } from './index/staking/components/staked-nfts/staked-nfts.component';
import { Education } from './index/education/education.component';
import { MenuBarComponent } from './index/components/menu-bar/menu-bar.component';
import { ApplicationpageComponent } from './index/applicationpage/applicationpage.component';
import { ReviewpageComponent } from './index/reviewpage/reviewpage.component';
import { ProjectpageComponent } from './index/projectpage/projectpage.component';
import { DAOComponent } from './index/dao/dao.component';
import { ProjectsComponent } from './index/projects/projects.component';
import { ProjectappComponent } from './index/projectapp/projectapp.component';
import { AllprojectsComponent } from './index/allprojects/allprojects.component';
import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { environment } from 'src/environments/environment';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { SearchPipe } from './index/dao/search.pipe'





@NgModule({
  declarations: [
    AppComponent,
    dialogComponent,
    HomepageComponent,
    MintComponent,
    UsernameComponent,
    StakeComponent,
    NftsComponent,
    StakedNFTSComponent,
    Education,
    MenuBarComponent,
    ApplicationpageComponent,
    ProjectpageComponent,
    ReviewpageComponent,
    DAOComponent,
    ProjectappComponent,
    ProjectsComponent,
    SearchPipe,
    AllprojectsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    MatTooltipModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    NgxExtendedPdfViewerModule,
    NgxMatIntlTelInputModule,
    NgxMatTelInputModule,
    PdfViewerModule,
    NgxMatIntlTelInputModule,
    TmNgOdometerModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
   AngularFireDatabaseModule,
  ],
  providers: [
    Title,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CSRFInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}