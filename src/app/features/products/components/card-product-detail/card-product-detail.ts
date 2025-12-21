import { Component, inject, Input } from '@angular/core';
import { Product } from '../../../../shared/models/interfaces/product/product.interface';
import { CommonModule } from '@angular/common';
import { ProductApiService } from '../../../../core/services/product/product-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-product-detail',
  imports: [CommonModule],
  templateUrl: './card-product-detail.html',
  styleUrl: './card-product-detail.scss'
})
export class CardProductDetail {
@Input() product!: Product;

private service = inject(ProductApiService);

readonly route = inject(ActivatedRoute);

ngOnInit() {
  const id = Number(this.route.snapshot.paramMap.get('id'));
  this.service.getProductById(id).subscribe((product) => {
    this.product = product;
  });
}

currentIndex = 0;

next() {
  if (this.product.images.length > 0) {
    this.currentIndex = (this.currentIndex + 1) % this.product.images.length;
  }
}

prev() {
  if (this.product.images.length > 0) {
    this.currentIndex =
      (this.currentIndex - 1 + this.product.images.length) %
      this.product.images.length;
  }
}

goTo(index: number) {
  this.currentIndex = index;
}
}
