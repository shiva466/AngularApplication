import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarHomePageComponent } from './car-home-page.component';

describe('CarHomePageComponent', () => {
  let component: CarHomePageComponent;
  let fixture: ComponentFixture<CarHomePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarHomePageComponent]
    });
    fixture = TestBed.createComponent(CarHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
