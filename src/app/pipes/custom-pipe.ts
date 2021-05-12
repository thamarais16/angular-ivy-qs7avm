import {Pipe, PipeTransform, Inject, Host, Self, SkipSelf } from "@angular/core";
import { DatePipe } from "@angular/common";

@Pipe({
  name: 'myPipe',
})
export class CustomPipe implements PipeTransform {
  constructor(
    @Inject(DatePipe) private _date,
  ){

  }
  transform(value: any, unit: any){
    if(unit == 'F'){
      let temp = (value * 1.8)+32;
      return temp.toFixed(2);
    }

    if(unit == 'C'){
      let temp = (value - 32)/1.8;
      return temp.toFixed(2);
    }
  }
}