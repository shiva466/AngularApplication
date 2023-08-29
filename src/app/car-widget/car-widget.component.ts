import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-widget',
  templateUrl: './car-widget.component.html',
  styleUrls: ['./car-widget.component.css']
})
export class CarWidgetComponent implements OnInit {
  @Input() carData: any;
  carImageSrc: string = '../../assets/audi-logo.png';
  carName: string = 'Car Model';
  brandName: string = 'Car Brand';
  manufactureYear: number = 2023;
  milesDrove: number = 15000;
  subscriptionType: string = 'Premium User';
  dealerName: string = 'ABC Auto Sales';

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
}
