import {Component, Input} from '@angular/core';
import {Product} from '../../../../../shared/models/interfaces/product/product.interface';
import {CurrencyPipe, NgForOf} from '@angular/common';
import {LimitationString} from '../../../../../pipes/limitation-title-28i';

@Component({
  selector: 'app-products-card',
  imports: [
    CurrencyPipe,
    LimitationString,
    NgForOf
  ],
  templateUrl: './products-card.html',
  styleUrl: './products-card.scss'
})
export class ProductsCard {
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
