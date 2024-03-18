import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductResult} from "../model/result";
import {Product} from "../model/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseurl = "https://dummyjson.com/products"

  constructor(private httpClient: HttpClient) { }

  getProducts():Observable<ProductResult> {
    return this.httpClient.get<ProductResult>(this.baseurl);
  }

  getProduct(id:number):Observable<Product>{
    return this.httpClient.get<Product>(this.baseurl+'/'+id);
  }

  searchProducts(keyword:string):Observable<ProductResult>{
    return this.httpClient.get<ProductResult>(this.baseurl + '/search?q='+keyword);
  }

  getCategories():Observable<string[]>{
    return this.httpClient.get<string[]>(this.baseurl + '/categories');
  }

  getCategoryProducts(category:string):Observable<ProductResult>{
    return this.httpClient.get<ProductResult>(this.baseurl + '/category/'+category);
  }

}
