import { Injectable } from "@angular/core";
import { Logger } from "./log";

@Injectable()
export class ProductService {
  constructor(
    private log: Logger,
  ){

  }
}