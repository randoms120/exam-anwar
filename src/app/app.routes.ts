import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProductDetailComponent} from "./product-detail/product-detail.component";

export const routes: Routes = [
  {
    path:"detail/:id",
    component:ProductDetailComponent
  },
  {
    path:"home",
    component: HomeComponent
  },
  {
    path:"**",
    redirectTo:"home"
  }
];
