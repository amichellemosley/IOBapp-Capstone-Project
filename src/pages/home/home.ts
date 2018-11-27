import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CalculatorServiceProvider } from '../../providers/calculator-service/calculator-service';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  calculate = {
    bg: [],
    carbs: [],
    hours: []
  };
  logForm(form) {
    console.log(form.value)
  }



  constructor(public navCtrl: NavController, public dataService: CalculatorServiceProvider ) {

  }

}
