import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-bolusdiary',
  templateUrl: 'bolusdiary.html'
})
export class BolusDiaryPage {

  constructor(public navCtrl: NavController) {

  }

  title = "Bolus Diary"

}
