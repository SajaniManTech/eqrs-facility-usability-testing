import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MdExpansionModule, MdSelectModule, MdDialogModule, MdAutocompleteModule, MdInputModule, MdTooltipModule} from '@angular/material';

import { AppComponent } from './app.component';
import { FacilitySearchComponent } from './facility-search/facility-search.component';


@NgModule({
  declarations: [
    AppComponent,
    FacilitySearchComponent
  ],
  imports: [
    BrowserModule,
    MdExpansionModule,
    MdSelectModule,
    MdDialogModule,
    MdAutocompleteModule,
    MdInputModule,
    MdTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
