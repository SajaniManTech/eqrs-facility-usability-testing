import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facility-search',
  templateUrl: './facility-search.component.html',
  styleUrls: ['./facility-search.component.css']
})
export class FacilitySearchComponent implements OnInit {

  showAdvSearchPanel = false;
  specificsArray: string[] = [];
  locationArray: string[] = [];
  facilityAdvancedSearchToolTip = 'Advanced search is a multi-select form that allows list generation. Some of the fields are drop down while others are lookup. In lookup fields, there is no partial entry allowed. The user must select from the resulting list but can choose multiple items by clicking and adding them to the staging area. All criteria in the staging area are "AND" between different types but are OR when multiples are chosen from the same type. For instance, searching 21113 (Maryland zip code) AND California then the user gets a popup that there are no results without taking the user to the results page.';

  constructor() { }
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
      if(specFlag) this.specificsArray.push(value);
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
      if(locFlag) this.locationArray.push(value);
    }
  }

  removeAllItems() {
    this.locationArray = [];
    this.specificsArray = [];
  }

  ngOnInit() {
  }

}
