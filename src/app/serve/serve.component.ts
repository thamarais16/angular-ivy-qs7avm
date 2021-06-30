import { Component, OnInit, Inject, InjectionToken } from '@angular/core';
import { ProductService } from '../product-service';
import { Product } from '../product';

const API_URL = new InjectionToken<string>('');
@Component({
  selector: 'app-serve',
  templateUrl: './serve.component.html',
  styleUrls: ['./serve.component.css'],
  providers: [
    {
      provide: ProductService,
      useClass: ProductService
    },
    {
      provide: "api_sere",
      useClass: ProductService
    },
    {
      provide: API_URL,
      useValue: 5
    },
    {
      provide: 'hi',
      useFactory: (API_URL)=> (API_URL == 5) ? "ABC":"123",
      deps:[API_URL]
    }
  ]
})
export class ServeComponent implements OnInit {
  service: any;
  constructor(
    @Inject(ProductService) private prd: ProductService,
    @Inject("api_sere") private prds: ProductService,
    @Inject(API_URL)private api_ur,
    @Inject('hi') private vels
  ) {
    this.service = vels;

   }

  ngOnInit() {

  }

} 