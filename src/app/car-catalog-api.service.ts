import { Injectable } from '@angular/core';
import {Car} from './car';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';
import {carDataBase} from './data-base';

@Injectable({
  providedIn: 'root'
})
export class CarCatalogApiService {
  private db: Car[] = carDataBase;
  constructor() { }

  search(query: string): Observable<Car[]> {
    const queryRegex = RegExp(this.hiraToKana(query));
    return of(this.db)
      .pipe(
        map(cars => {
          return query ? cars.filter(car => queryRegex.test(car.id) || queryRegex.test(car.name)) : [];
        })
      );
  }

  private hiraToKana(str) {
    return str.replace(/[\u3041-\u3096]/g, (match) => {
      const chr = match.charCodeAt(0) + 0x60;
      return String.fromCharCode(chr);
    });
  }
}
