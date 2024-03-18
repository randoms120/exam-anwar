import { Component } from '@angular/core';
import {ProductService} from "../service/product.service";
import {ActivatedRoute} from "@angular/router";
import {HeaderComponent} from "../header/header.component";
import {Product} from "../model/product";
import {CurrencyPipe, PercentPipe} from "@angular/common";

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    HeaderComponent,
    CurrencyPipe,
    PercentPipe
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

  product !: Product;

  constructor(private productService : ProductService, private activatedRoute: ActivatedRoute) {
    let id = this.activatedRoute.snapshot.params['id'];
    this.productService.getProduct(id).subscribe((result) => {
      this.product = result;
      console.log(this.product)
    });
  }
}
