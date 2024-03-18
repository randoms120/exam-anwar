import {Product} from "./product";

export interface ProductResult{
  products: Product[];
  total:number,
  skip:number,
  limit:number,
}
