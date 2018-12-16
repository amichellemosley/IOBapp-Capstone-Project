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

  title = "IOB-Active Insulin on Board"
  
  loadItems () {
    this.dataService.SendInfo()}
  }

