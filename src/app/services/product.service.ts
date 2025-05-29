import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {
    console.log('Product Service');
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
}
