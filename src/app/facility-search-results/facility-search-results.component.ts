import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-facility-search-results',
  templateUrl: './facility-search-results.component.html',
  styleUrls: ['./facility-search-results.component.css']
})
export class FacilitySearchResultsComponent implements OnInit {

  searchData: any;

  constructor( private http: HttpClient ) { }

  ngOnInit() {
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
