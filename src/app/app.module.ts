import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EsriMapComponent } from './esri-map/esri-map.component';
import { JobSearchComponent } from './job-search/job-search.component';
import { SharedModule } from './shared.module';
// import { AngularEsriModule } from 'angular-esri-components';

@NgModule({
  declarations: [
    AppComponent,
    EsriMapComponent,
    JobSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    SharedModule
    // AngularEsriModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
