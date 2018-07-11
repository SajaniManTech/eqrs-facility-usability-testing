import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MdExpansionModule, MdSelectModule, MdDialogModule, MdAutocompleteModule, MdInputModule, MdTooltipModule} from '@angular/material';
import { AppComponent } from './app.component';
import { FacilitySearchComponent } from './facility-search/facility-search.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { FacilitySearchResultsComponent } from './facility-search-results/facility-search-results.component';
import {routing} from './app-routing.module';
import {DynamicDatatableModule} from '@eqrs/datatable';

@NgModule({
  declarations: [
    AppComponent,
    FacilitySearchComponent,
    FacilitySearchResultsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdExpansionModule,
    MdSelectModule,
    MdDialogModule,
    MdAutocompleteModule,
    MdInputModule,
    MdTooltipModule,
    HttpClientModule,
    DynamicDatatableModule,
    routing
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
