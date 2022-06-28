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

@NgModule({
  declarations: [
    AppComponent,
    dialogComponent,
    HomepageComponent,
    MintComponent,
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
    NgxMatIntlTelInputModule,
    NgxMatTelInputModule,
    NgxMatIntlTelInputModule,
    TmNgOdometerModule,
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
