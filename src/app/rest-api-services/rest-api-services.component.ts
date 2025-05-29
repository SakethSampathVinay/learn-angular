import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-rest-api-services',
  imports: [],
  templateUrl: './rest-api-services.component.html',
  styleUrl: './rest-api-services.component.css'
})
export class RestApiServicesComponent {
  productList: any;
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProductList().subscribe((data: any) => {
      console.log(data);
      this.productList = data.products;
    })
  }
}
