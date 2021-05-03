import { Injectable } from "@angular/core";
import { Product } from "./product";
import { Logger } from "./log";

@Injectable()
export class ProductService {
  constructor(
    private logger: Logger,
  ){

  }

  getProducts(){
    let product: Product[];

    product = [
      new Product("Thamarai", 61),
      new Product("Thiru", 62)
    ]
    this.logger.log(product);
    return product;
  }
}