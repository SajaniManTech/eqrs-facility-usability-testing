import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MdExpansionModule, MdSelectModule, MdDialogModule, MdAutocompleteModule, MdInputModule, MdTooltipModule} from '@angular/material';
import { AppComponent } from './app.component';
import { FacilitySearchComponent } from './facility-search/facility-search.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { FacilitySearchResultsComponent } from './facility-search-results/facility-search-results.component';
import {routing} from './app-routing.module';
import { DialogModule} from 'primeng/dialog';
import { ButtonModule} from 'primeng/button';
import {SelectCriteriaService} from './services/select-criteria.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

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
    DialogModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [HttpClient, SelectCriteriaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
