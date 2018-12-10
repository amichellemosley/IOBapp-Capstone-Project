import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CalculatorServiceProvider } from '../../providers/calculator-service/calculator-service';





@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  


  constructor(public navCtrl: NavController, public dataService: CalculatorServiceProvider ) {

  }

  calculate(bg,carbs,hours,ratio) {
   /* bg = newBG, 
    carbs = newCarbs,
    hours = hours,
    ratio = newRatio;
*/
  
    let totalUnits = 0;



      function newBG (bg) {
        if (bg = [150-199]){
        console.log(totalUnits ++ .5)
        }
         else if (bg = [200-250]) {
        console.log(totalUnits ++ 1)
        }
        
        else if (bg = [251-349]){
        console.log(totalUnits ++ 2)
        }
        else if (bg = [350-399]){
        console.log(totalUnits ++ 3)
        }
        else if (bg = [400-450]) {
        console.log(totalUnits ++ 4)
        }
        
        return totalUnits;
        }
        
        
      function newCarbs (carbs, totalUnits) {
        if (carbs <= 10) {
        totalUnits ++ 0}
        else if (carbs >= 10) {
          totalUnits ++ 1, ####Here add per every 10 carbs)
        }
        
      return totalUnits;
      }
      
      function newRatio(totalUnits, hours) { 
      
      while ratio = 30 || hours = 1 {
              totalUnits ++ .75  & ++totalUnits
              else if hours = 2 {
                      totalUnits ++ 1.5
                      else{
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
      
      }}


  this.navCtrl.push(HomePage, {
    data: this.calculate
});

/*
addInfo(){
 console.log("Adding");
  (this.calculate.bg, this.calculate.carbs, this.calculate.hours, this.calculate.ratio);
};
*/


