import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  carArray: any = [];
  filteredCarWidgets: any[] = [];
  uniqueBrandNames: any = [];
  sortProperty: string = 'carName'; // Property to sort by
  sortOrder: 'asc' | 'desc' = 'asc'; // Sort order (asc or desc)
  
  ngOnInit() {
    this.loadCarData();
  }
  
  loadCarData() {
    var request = new XMLHttpRequest();
    request.open(
      'GET',
      '../../assets/cars.json',
      false
    );
    request.send(null);
    this.carArray = JSON.parse(request.responseText);
  }

  extractUniqueBrandNames() {
    const brandSet: any = [];
    brandSet.add("All Brands"); 
    brandSet.add(new Set(this.carArray.map((car:any) => car.brand)));
    this.uniqueBrandNames = Array.from(brandSet);
  }

  filterByBrand(event: Event) {
    const brandName = (event.target as HTMLSelectElement).value;
    console.log(brandName);
    if (brandName === "") {
      this.filteredCarWidgets = [...this.carArray]; // Reset to all items
    } else {
      this.filteredCarWidgets = this.carArray.filter((item: any) => {
        return item.brand === brandName; // Adjust this line based on your data structure
      });
    }
  }
  sortCarWidgets() {
    console.log("Before sorting:", this.carArray.map((car: any) => car.year));
    this.carArray.sort((a: any, b: any) => {
      const yearA = parseInt(a.year || "0", 10); // Convert to integer
      const yearB = parseInt(b.year || "0", 10); // Convert to integer
      return this.sortOrder === 'asc'
        ? yearA - yearB
        : yearB - yearA;
    });
    console.log("After sorting:", this.carArray);
  }
  
  
}
