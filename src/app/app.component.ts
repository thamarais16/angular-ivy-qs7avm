import { Component, VERSION, ChangeDetectionStrategy, Inject } from '@angular/core';
import { ProductService } from './product-service';
import { Product } from './product';
import { Observable, pipe } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Component({
  selector: 'my-app', 
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: [ ProductService ],
  changeDetection: ChangeDetectionStrategy.Default
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  public product: Observable<Product[]>;

  constructor(
    @Inject(ProductService) private productService ,
  ){}

  ngOnInit(){
    this.product = new Observable(resolve => {
      setTimeout(()=> {
        resolve.next(this.productService.getProducts());
      }, 5000);
    })

    this.product.subscribe(data => {return data});
  }

  trackByFn(index, item){
    return item.id;
  }

}
