import {Component, OnInit} from '@angular/core';
import {CarCatalogApiService} from './car-catalog-api.service';
import {CarCatalogService} from './car-catalog.service';
import {Observable} from 'rxjs';
import {Car} from './car';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'incrementalSearchSample';
  query: string;
  searchResult: Observable<Car[]>;
  selected: Car;

  constructor(private carCatalogService: CarCatalogService) {
  }

  ngOnInit() {
    this.searchResult = this.carCatalogService.carCatalog;
  }

  search(query: string) {
    this.carCatalogService.search(query);
  }
  select(car: Car) {
    this.query = car.id;
    this.selected = car;
  }
}
