import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Product } from "../../../shared/models/interfaces/product/product.interface";


@Injectable({
    providedIn: 'root'
})
export class ProductApiService {
    private readonly http =  inject(HttpClient);

    getProducts() {
        return this.http.get<Product[]>(' https://api.escuelajs.co/api/v1/products');
    }
}