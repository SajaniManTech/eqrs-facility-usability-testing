import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/compiler/src/core';
import {FacilitySearchComponent} from './facility-search/facility-search.component';
import {FacilitySearchResultsComponent} from './facility-search-results/facility-search-results.component';

const appRoutes: Routes = [
  { path: '', component: FacilitySearchComponent},
  { path: 'facility-search-page', component: FacilitySearchComponent },
  { path: 'facility-search-results', component: FacilitySearchResultsComponent}

];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
