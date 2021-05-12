import { KeyValue } from '@angular/common';
import { error } from '@angular/compiler/src/util';
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
  fahrenheit;
  celsius;
  
  constructor() { } 

  ngOnInit() {
    

  }

  public names: Observable<any> = new Observable(observer => {
    console.log("obsss");
    setTimeout(() => {
      observer.next("We are processing please wait");
    }, 3000);

    setTimeout(() => {
      observer.next("Your name is Thamarai Selvan");
    }, 7000);

    setTimeout(() => {
      observer.error("There is some error");
    }, 10 * 1000);
    
    setTimeout(() => {
      observer.complete();
    }, 14 *1000);
  }).pipe(shareReplay());

  public nameList: Observable<any> = new Observable(observer => {


    setTimeout(() => {
      observer.next(["a", "b", "c"]);
    }, 7000);
  }).pipe(shareReplay());

  
  nameLis = new Promise(res => {
      res({'c': 467, 'a':975, 'b': 8797});
    }).finally(()=>{
      return 0;
    });
  

  compareFn = (a: KeyValue<any, any>, b: KeyValue<any, any>) =>{
    //return 0; default
    //return a.value > b.value ? -1 : (a.value > b.value )? 0 : 1 descending
    return a.value > b.value ? 1 : (a.value > b.value )? 0 : -1;
  }

}