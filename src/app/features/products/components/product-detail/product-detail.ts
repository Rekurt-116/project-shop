import {Component, inject, Input, OnInit} from '@angular/core';
import {Product} from '../../../../shared/models/interfaces/product/product.interface';
import {NgForOf, NgIf} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {ProductApiService} from '../../../../core/services/product/product-api.service';

@Component({
  selector: 'app-product-detail',
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.scss'
})
export class ProductDetail implements OnInit {
  private route = inject(ActivatedRoute);
  private productApi = inject(ProductApiService);

 @Input() product!: Product;

  currentIndex = 0;

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'))

    if(!id) {
      return;
    }

    this.productApi.getProductById(id).subscribe({
      next: (product) => {
        this.product = product;
        this.currentIndex = 0;
      },
      error: (err) => {
        console.error('Ошибка загрузки продукта', err);
      }
    })
  }

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
