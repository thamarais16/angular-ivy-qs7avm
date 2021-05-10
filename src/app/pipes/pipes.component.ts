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


  constructor() { } 

  ngOnInit() {
    

  }

  public names: Observable<any> = new Observable(observer => {
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
      res("hi");
    }).finally(()=>{
      return 0;
    })
  



}