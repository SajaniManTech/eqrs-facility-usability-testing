import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilitySearchResultsComponent } from './facility-search-results.component';

describe('FacilitySearchResultsComponent', () => {
  let component: FacilitySearchResultsComponent;
  let fixture: ComponentFixture<FacilitySearchResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilitySearchResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilitySearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
