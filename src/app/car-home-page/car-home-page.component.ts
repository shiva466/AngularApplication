import { Component } from '@angular/core';

@Component({
  selector: 'app-car-home-page',
  templateUrl: './car-home-page.component.html',
  styleUrls: ['./car-home-page.component.css']
})
export class CarHomePageComponent {
  carImageSrc: string = '../../assets/bmw-logo.png';
  carName = "Car Brand";
  carModel = "Car Model";
  manufacturingYear = "2023";
  transmissionType = "Automatic";
  fuelType = "Petrol";
  engineCapacity = "2.0L";
  color = "Blue";
  dealers = "Car Dealer A, Car Dealer B";
  nct = "2023-12-31";
}
