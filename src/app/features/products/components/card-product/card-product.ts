import { Component, Input } from '@angular/core';
import { Product } from '../../../../shared/models/interfaces/product/product.interface';
import { CommonModule } from '@angular/common';
import { LimitationString } from '../../../../shared/pipes/limitation-title-28i';

type MyPartial<T> = {
  [key in keyof T]?: T[key];
};

@Component({
  selector: 'app-card-product',
  imports: [CommonModule, LimitationString],
  templateUrl: './card-product.html',
  styleUrls: ['./card-product.scss']
})
export class CardProduct {
@Input() product!: Product;

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
