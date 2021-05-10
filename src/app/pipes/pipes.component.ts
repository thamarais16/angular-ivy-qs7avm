import { Component, OnInit } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  dates = new Date();
  name: Observable<string>;
  names: Observable<string>;

  constructor() { } 

  ngOnInit() {
    
    this.names = new Observable(observer => {
      setTimeout(() => {
        observer.next("We are processing please wait");
      }, 3000);

      setTimeout(() => {
        observer.next("Your name is Thamarai Selvan");
      }, 7000);

      observer.complete();
    })
    
    this.names.subscribe(data => {
      return data;
    });

    this.name = (this.names).pipe(shareReplay());
    

  }

   




}