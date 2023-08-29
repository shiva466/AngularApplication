import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  carArray: any = [];
  filteredCarWidgets: any[] = [];
  sortProperty: string = 'carName'; // Property to sort by
  sortOrder: 'asc' | 'desc' = 'asc'; // Sort order (asc or desc)
  
  ngOnInit() {
    debugger;
    this.carArray //=JSON.parse(JSON.stringify(carsData));;
    var request = new XMLHttpRequest();
    request.open(
      'GET',
      '../../assets/cars.json',
      false
    );
    request.send(null);
    this.carArray = JSON.parse(request.responseText);
  }

  filterByBrand(event: Event) {
    // const brandName = (event.target as HTMLSelectElement).value;
    // if (brandName === "") {
    //   this.filteredCarWidgets = [...this.loopArray]; // Reset to all items
    // } else {
    //   this.filteredCarWidgets = this.loopArray.filter(item => item.brandName === brandName);
    // }
  }

  sortCarWidgets() {
    // this.loopArray.sort((a, b) => {
    //   return this.sortOrder === 'asc' ? a.manufactureYear - b.manufactureYear : b.manufactureYear - a.manufactureYear;
    // });
  }

}
