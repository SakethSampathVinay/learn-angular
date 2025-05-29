import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {
  }

  getProductData() {
    return [
      {
        name: 'mobile',
        brand: 'samsung',
        price: '20000',
      },
      {
        name: 'laptop',
        brand: 'dell',
        price: '200000',
      },
      {
        name: 'washine machine',
        brand: 'samsung',
        price: '20000',
      },
    ];
  }


  getProductList() {
    const url = "https://dummyjson.com/products";
    return this.http.get(url);
  }
  
}
