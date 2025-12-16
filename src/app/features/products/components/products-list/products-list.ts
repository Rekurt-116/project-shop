import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, Input, OnInit } from '@angular/core';
import { CardProduct } from "../card-product/card-product";
import { Product } from '../../../../shared/models/interfaces/product/product.interface';
import { CommonModule } from '@angular/common';
import { ProductApiService } from '../../../../core/services/product/product-api.service';

@Component({
  selector: 'app-products',
  imports: [CardProduct, CommonModule],
  templateUrl: './products-list.html',
  styleUrls: ['./products-list.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsList implements OnInit {
  readonly productApiService = inject(ProductApiService);
  readonly cd = inject(ChangeDetectorRef);

  @Input() product!: Product; 

  public products: Product[] = [];

  // trackById(index: number, product: Product) {
  //   return product.id;
  // }

  ngOnInit() {
    this.productApiService.getProducts().subscribe(response => {
      this.products = response
      this.cd.markForCheck();
    })
  }
}
