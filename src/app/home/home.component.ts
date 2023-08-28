import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  loopCount: number = 6;
  loopArray: any[] = [
    { carName: 'Car A', manufactureYear: 2020, /* ...other properties */ },
    { carName: 'Car B', manufactureYear: 2022, /* ...other properties */ },
    { carName: 'Car C', manufactureYear: 2019, /* ...other properties */ },
    { carName: 'Car D', manufactureYear: 2019, /* ...other properties */ },
    { carName: 'Car E', manufactureYear: 2019, /* ...other properties */ },
    // ... other car objects
  ];
  filteredCarWidgets: any[] = [];

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
