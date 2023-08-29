import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared-service.service';

@Component({
  selector: 'app-car-widget',
  templateUrl: './car-widget.component.html',
  styleUrls: ['./car-widget.component.css']
})
export class CarWidgetComponent implements OnInit {
  @Input() carData: any;
  carImageSrc: string = "";
  subscriptionType: string = 'Premium User';
  constructor(private router: Router, private sharedService: SharedService) {}

  ngOnInit(): void {
    this.carImageSrc = '../../assets/'+this.carData.id+'.jpeg';
  }
  
  viewDetails(){
    this.sharedService.setData(this.carData);
    this.router.navigate(['/car', this.carData.id]);
  }
}
