import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpClientModule} from '@angular/common/http';
import {SelectCriteriaService} from '../services/select-criteria.service';

@Component({
  selector: 'app-facility-search',
  templateUrl: './facility-search.component.html',
  styleUrls: ['./facility-search.component.css']
})
export class FacilitySearchComponent implements OnInit {
sss: any;
  showAdvSearchPanel = false;
  specificsArray: string[] = [];
  locationArray: string[] = [];
  facilityAdvancedSearchToolTip = 'Advanced search is a multi-select form that allows list generation. Some of the fields are drop down while others are lookup. In lookup fields, there is no partial entry allowed. The user must select from the resulting list but can choose multiple items by clicking and adding them to the staging area. All criteria in the staging area are "AND" between different types but are OR when multiples are chosen from the same type. For instance, searching 21113 (Maryland zip code) AND California then the user gets a popup that there are no results without taking the user to the results page.';
  facilitySearchToolTip = 'Facility lookup allows the lookup of specific facilities to be listed in the search results. Requires at least 3 characters to begin searching. Advanced search generates facilities lists based on general criteria.';
  searchData: any;
  zipCodeResults: any;
  display: boolean = false;

  constructor( private http: HttpClient,
               private selectCriteriaService: SelectCriteriaService) { }

  getSelectedSpecificsValue(e: any) {
    let specFlag: boolean = true;
    // get the value of the selected option
    let value = e.options[e.selectedIndex].value;
    if (this.specificsArray.length == 0)
      this.specificsArray.push(value);
    else {
      for (let item in this.specificsArray) {
        if ( this.specificsArray[item] == value) specFlag = false;
      }
      if (specFlag) this.specificsArray.push(value);
    }
  }

  getSelectedLocationValue(e: any) {
    let locFlag = true;
    let value = e.options[e.selectedIndex].value;
    if (this.locationArray.length == 0)
      this.locationArray.push(value);
    else {
      for (let item in this.locationArray) {
        if ( this.locationArray[item] == value) locFlag = false;
      }
      if (locFlag) this.locationArray.push(value);
    }
  }

  showManyResultsModal() {
    if (this.specificsArray.length + this.locationArray.length >= 20) {
      return true;
    }
    return false;
  }

  removeAllItems() {
    this.locationArray = [];
    this.specificsArray = [];
  }

  onZipCodeUpdate(zipCode: string) {
    zipCode = zipCode.trim();
    if (zipCode.length >= 4) {
      this.zipCodeResults = this.searchData.zipCodes.filter((value) => { return value.indexOf(zipCode) != -1 });
    }
  }

  showDialog() {
    this.display = true;
  }

  ngOnInit() {

      this.sss = this.selectCriteriaService.removeAllItems();
      this.http.get('assets/data/advanced-search.json').subscribe(
        data => {
          this.searchData = data;
        },
        (err: HttpErrorResponse) => {
          console.log (err.message);
        }
      );

  }

}
