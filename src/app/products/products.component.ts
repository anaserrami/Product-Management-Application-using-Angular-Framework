import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products : Array<any> = [
    {id : 1, name: "Product 1", price : 4000, checked: true},
    {id : 2, name: "Product 2", price : 5000, checked: false},
    {id : 3, name: "Product 3", price : 6000, checked: true}
  ];

  handelCheckedProduct(product: any) {
    product.checked = !product.checked;
  }
}
