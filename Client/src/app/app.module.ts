import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GryComponent } from './gry/gry.component';
import { FormularzComponent } from './formularz/formularz.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WebapiService } from './webapi.service';
import { FORM_SUBMIT_TOKEN } from './tokens/form-submit.token';
import { GET_DATA_TOKEN } from './tokens/get-data.token';
import localePl from '@angular/common/locales/pl';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localePl);

@NgModule({
  declarations: [
    AppComponent,
    GryComponent,
    FormularzComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    WebapiService,
    {
      provide: GET_DATA_TOKEN, useExisting: WebapiService,
    },
    {
      provide: FORM_SUBMIT_TOKEN, useExisting: WebapiService
    },
    {
      provide: LOCALE_ID, useValue: 'pl-PL'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }