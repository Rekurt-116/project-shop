import {HttpClient, HttpParams} from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Product } from "../../../shared/models/interfaces/product/product.interface";

@Injectable({
    providedIn: 'root'
})
export class ProductApiService {
    private readonly http =  inject(HttpClient);
    private readonly productUrl = 'https://api.escuelajs.co/api/v1/products'

    getProducts(search = '') {
      let params = new HttpParams();

      if (search) {
        params = params.set('title', search);
      }
        return this.http.get<Product[]>(this.productUrl, {params: params});
    }

    getProductById(id: number) {
        return this.http.get<Product>(` https://api.escuelajs.co/api/v1/products/${id}`);
    }
}
