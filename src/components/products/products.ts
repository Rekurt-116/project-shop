import { Component, inject } from '@angular/core';
import { CardProduct } from "./card-product/card-product";
import { ProductApiService } from '../../app/services/product/product-api.service';

@Component({
  selector: 'app-products',
  imports: [CardProduct],
  templateUrl: './products.html',
  styleUrl: './products.scss'
})
export class Products {
  readonly productApiService = inject(ProductApiService);

  constructor() {
    this.productApiService.getProducts().subscribe(products => {
      console.log(products);
    })
  }
}
