import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HomePage } from '../../pages/home/home';
import { BolusDiaryPage } from '../../pages/bolusdiary/bolusdiary';


@Injectable()
export class CalculatorServiceProvider {
  SendInfo: any;
  navCtrl: any;


  
 /* getInfo(){return this.http.get('https://someserver.com/api/info')}



  addInfo(){return this.http.post('https://someserver.com/api/info')}   */

  constructor(public http: HttpClient) {
    console.log('Hello CalculatorServiceProvider Provider');
  }

  getItems() { return this.SendInfo;}

  sendInfo(bg,carbs,hours,ratio) {
    bg = Number, 
    carbs = Number,
    hours = Number,
    ratio = Number;

  let totalUnits: Number;


      function BG (bg,totalUnits) {
      
        if (bg = 150-199){
        console.log(totalUnits + .5)
        }
         else if (bg = 200-250) {
        console.log(totalUnits + 1)
        }
        
        else if (bg = 251-349){
        console.log(totalUnits + 2)
        }
        else if (bg = 350-399){
        console.log(totalUnits + 3)
        }
        else if (bg = 400-450) {
        console.log(totalUnits + 4)
        }
        
        return totalUnits;
        }
        
        
      function Carbs (carbs, totalUnits) {
        if (carbs <= 10) {
        console.log(totalUnits + 0)}
        else if (carbs >= 10) {
          console.log(totalUnits + 1) /*####Here add per every 10 carbs)*/
        }
        
      return totalUnits;
      }
      
     /* function Ratio(totalUnits, hours, ratio) { 
      
     if (ratio = 30 || hours === 1) {
              console.log(totalUnits + .75  & +totalUnits)
               if (hours = 2) {
                      console.log(totalUnits + 1.5)
                      {
                      totalUnits ++ 3 
      }}}
      
      
      while ratio = 40 || hours = 1{
              totalUnits ++ .50 
              else if hours = 2 {
                      totalUnits ++ 1
                      else{
                      totalUnits ++ 2 
      }}}
      
      while ratio = 50 || hours = 1 {
             totalUnits ++ .25 
              else if hours = 2 {
                      totalUnits ++ .50
                      else{
                      totalUnits ++ 1 
      }}}
      
      while ratio = 60 || hours = 1 {
             totalUnits -- .25
              else if hours = 2 {
                     totalUnits -- .50 
                      else{
                     totalUnits -- 1 
      }}}
      
      
      while ratio = 70 || hours = 1 {
              totalUnits -- .50 
              else if hours = 2 {
                      totalUnits -- 1 
                      else {
                      totalUnits -- 2
              
      }}}
      
      while ratio = 80 || hours = 1 {
              totalUnits -- .75 
              else if hours = 2 {
                     totalUnits -- 1.5 
                      else {
                      totalUnits -- 3 
      }}}
      
      
      return totalUnits
      
      }}*/


  this.navCtrl.push(BolusDiaryPage, {
    data: this.sendInfo
});

  
  }}


