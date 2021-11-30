import { Component, OnInit } from '@angular/core';
import { route_products } from 'src/app/shared/data/routes/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  vavles: boolean;
  filter: boolean;
  fini: boolean;

  products = route_products;
  constructor() { }

  ngOnInit() {
  }
  opechild(key: string) {
    this.resetChild();
    if (key === 'vavles') {
      this.vavles = true;
    }
    if (key === 'filter') {
      this.filter = true;
    }
    if (key === 'fini') {
      this.fini = true;
    }
  }

  resetChild() {
    this.vavles = false;
    this.filter = false;
    this.fini = false;
  }
}
