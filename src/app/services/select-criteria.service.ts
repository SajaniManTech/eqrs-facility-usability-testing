import { Injectable } from '@angular/core';

@Injectable()
export class SelectCriteriaService {
  locationArray: any;
  specificsArray: any;

  constructor() { }

  removeAllItems() {
    this.locationArray = [];
    this.specificsArray = [];
    return 'hey';
  }
}
