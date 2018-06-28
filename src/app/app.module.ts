import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FacilitySearchComponent } from './facility-search/facility-search.component';


@NgModule({
  declarations: [
    AppComponent,
    FacilitySearchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
