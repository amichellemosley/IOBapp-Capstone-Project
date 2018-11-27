import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  
*/
@Injectable()
export class CalculatorServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CalculatorServiceProvider Provider');
  }

}
