import { Component, OnInit } from '@angular/core';
import * as carsData from '../../assets/cars.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  loopCount: number = 6;
  loopArray: any[] = carsData;
  filteredCarWidgets: any[] = [];
  
  ngOnInit() {
    debugger;
    this.loopArray;
    // Initialize your component, if needed
  }
  filterByBrand(event: Event) {
    const brandName = (event.target as HTMLSelectElement).value;
    if (brandName === "") {
      this.filteredCarWidgets = [...this.loopArray]; // Reset to all items
    } else {
      this.filteredCarWidgets = this.loopArray.filter(item => item.brandName === brandName);
    }
  }

  sortProperty: string = 'carName'; // Property to sort by
  sortOrder: 'asc' | 'desc' = 'asc'; // Sort order (asc or desc)

  sortCarWidgets() {
    this.loopArray.sort((a, b) => {
      return this.sortOrder === 'asc' ? a.manufactureYear - b.manufactureYear : b.manufactureYear - a.manufactureYear;
    });
  }

}
