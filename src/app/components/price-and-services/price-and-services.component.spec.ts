import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceAndServicesComponent } from './price-and-services.component';

describe('PriceAndServicesComponent', () => {
  let component: PriceAndServicesComponent;
  let fixture: ComponentFixture<PriceAndServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceAndServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceAndServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
