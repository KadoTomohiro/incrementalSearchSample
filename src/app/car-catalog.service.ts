import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Car} from './car';
import {CarCatalogApiService} from './car-catalog-api.service';

@Injectable({
  providedIn: 'root'
})
export class CarCatalogService {

  private carCatalog$: Subject<Car[]> = new Subject();

  constructor(private catCatalogApi: CarCatalogApiService) {
  }
  get carCatalog(): Observable<Car[]> {
    return this.carCatalog$.asObservable();
  }

  search(query: string): void {
    this.catCatalogApi.search(query)
      .subscribe(cars => this.carCatalog$.next(cars));
  }

}
