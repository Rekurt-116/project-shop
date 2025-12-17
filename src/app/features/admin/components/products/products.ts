import {ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, Input, OnInit} from '@angular/core';
import {ProductApiService} from '../../../../core/services/product/product-api.service';
import {Product} from '../../../../shared/models/interfaces/product/product.interface';
import {ProductsCard} from './products-card/products-card';
import {SearchInput} from '../../../../shared/search-input/search-input';
import {debounceTime, distinctUntilChanged, Subject, switchMap} from 'rxjs';

@Component({
  selector: 'app-products',
  imports: [
    ProductsCard,
    SearchInput
  ],
  templateUrl: './products.html',
  styleUrl: './products.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Products  implements OnInit {
  readonly productApiService = inject(ProductApiService);
  readonly cd = inject(ChangeDetectorRef);
  private search$ = new Subject<string>()

  @Input() product!: Product;

  public products: Product[] = [];

  ngOnInit() {
    this.loadProducts()

    this.search$
    .pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(qwery => this.productApiService.getProducts(qwery))
    )
      .subscribe(products => {
      this.products = products;
    })
  }

  loadProducts() {
  this.productApiService.getProducts().subscribe(products => {
    this.products = products;
  })
  }

  onSearch(query: string) {
    this.search$.next(query);
  }
}
