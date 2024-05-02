import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  products : Array<any> = [];

  constructor(private http : HttpClient) {
  }

  ngOnInit() {
    this.getProduct();
  }

  getProduct(){
    this.http.get<Array<any>>('http://localhost:8089/products')
      .subscribe( {
        next : data => this.products = data,
        error : err => {
          console.error('There was an error: ', err)
        }
      })
  }

  handelCheckedProduct(product: any) {
    this.http.patch<any>(`http://localhost:8089/products/${product.id}`, {checked: !product.checked})
      .subscribe({
        next : updatedProduct => {
          product.checked = !product.checked;
          // this.getProduct();
        }
      })
  }
}
