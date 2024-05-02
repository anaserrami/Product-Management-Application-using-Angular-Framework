import {Component, OnInit} from '@angular/core';
import {ProductService} from "../services/product.service";
import {Product} from "../model/product.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  public products : Array<Product> = [];
  public keyword : string = "";

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProduct();
  }

  getProduct(){
    this.productService.getProducts(1, 3).subscribe( {
      next : data => this.products = data,
      error : err => { console.error('There was an error: ', err) }
    })
  }

  handelCheckedProduct(product: Product) {
    this.productService.checkProduct(product).subscribe({
      next : updatedProduct => {
        product.checked = !product.checked;
        // this.getProduct();
      }
    })
  }

  handelEditProduct(product: Product) {
    this.productService.EditProduct(product).subscribe({
      next : updatedProduct => {
        // this.getProduct();
        const index = this.products.findIndex(p => p.id === updatedProduct.id);
      }
    })
  }

  handelDeleteProduct(product: Product) {
    if (confirm('Are you sure you want to delete this product?'))
    this.productService.DeleteProduct(product).subscribe({
      next : value => {
        // this.getProduct();
        this.products = this.products.filter(p => p.id !== product.id);
      }
    })
  }

  searchProducts() {
    this.productService.searchProducts(this.keyword).subscribe({
      next : value => { this.products = value; }
    })
  }
}
