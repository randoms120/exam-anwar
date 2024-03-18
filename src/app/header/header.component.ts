import {Component, EventEmitter, Output} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {ProductService} from "../service/product.service";
import {ProductResult} from "../model/result";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  formGroup = new FormGroup({
    keyword: new FormControl(''),
  })

  @Output()
  productSearchEvent = new EventEmitter<ProductResult>();

  constructor(private router: Router, private productService: ProductService) {
  }

  onSubmit() {
    let keyword = this.formGroup.value.keyword;
    if (keyword !== undefined && keyword !== null) {
      this.productService.searchProducts(keyword).subscribe((result) => {
        if (!this.router.url.includes("/home")){
          this.router.navigate(['/home']);
        }
        this.productSearchEvent.emit(result);
      });
    }

  }
}
