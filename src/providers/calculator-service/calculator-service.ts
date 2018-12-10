import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class CalculatorServiceProvider {

 /* getInfo(){return this.http.get('https://someserver.com/api/info')}



  addInfo(){return this.http.post('https://someserver.com/api/info')}   */

  constructor(public http: HttpClient) {
    console.log('Hello CalculatorServiceProvider Provider');
  }



  getInfo(){
 
    return this.http.get('https://someserver.com/api/info');

}

addInfo(){
 
 
  let info = {
      addBG: [],
      addcarbs: [],
      addhours: [],
      addratio: []
  };

  return this.http.post('https://someserver.com/api/info',(info));

}

}

