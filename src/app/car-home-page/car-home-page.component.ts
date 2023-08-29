import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared-service.service';

@Component({
  selector: 'app-car-home-page',
  templateUrl: './car-home-page.component.html',
  styleUrls: ['./car-home-page.component.css']
})
export class CarHomePageComponent implements OnInit {
  carImageSrc: string = '../../assets/bmw-logo.png';
  carData: any;

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
   debugger;
   this.sharedService.getData().subscribe(data => {
    this.carData = data; 
  });
   this.carImageSrc = '../../assets/'+this.carData.id+'.jpeg';
  }
}
