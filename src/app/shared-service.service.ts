// shared.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private dataSubject = new BehaviorSubject<string>(''); // BehaviorSubject to hold data

  setData(data: any) {
    this.dataSubject.next(data);
  }

  getData() {
    return this.dataSubject.asObservable();
  }
}
