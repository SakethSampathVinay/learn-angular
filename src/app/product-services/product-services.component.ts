import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-services',
  imports: [],
  templateUrl: './product-services.component.html',
  styleUrl: './product-services.component.css',
})
export class ProductServicesComponent {
  productData:
    | {
        name: string;
        brand: string;
        price: string;
      }[]
    | undefined;

  constructor(private productService: ProductService) {}

  getProductData() {
    this.productData = this.productService.getProductData();
    console.log(this.productData);
  }
}
