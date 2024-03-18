import {AfterViewInit, Component, OnChanges, SimpleChanges} from '@angular/core';
import {ProductService} from "../service/product.service";
import {HeaderComponent} from "../header/header.component";
import {Product} from "../model/product";
import {ProductCardComponent} from "../product-card/product-card.component";
import {ProductResult} from "../model/result";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    ProductCardComponent,
    FormsModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnChanges {

  products: Product[] = [];

  categories: string[] = [];

  selectedCategory: string = "all";

  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe((result) => {
      this.products = result.products;
    });
    this.productService.getCategories().subscribe((result) => {
      this.categories = result;
    });
  }

  search(result: ProductResult) {
    this.products = result.products;
  }

  ngOnChanges(changes: SimpleChanges) {
  }

  handleOptionChange() {
    if (this.selectedCategory === "all") {
      this.productService.getProducts().subscribe((result) => {
        this.products = result.products;
      });
    } else {
      this.productService.getCategoryProducts(this.selectedCategory).subscribe((result) => {
        this.products = result.products;
      });
    }
  }

}
