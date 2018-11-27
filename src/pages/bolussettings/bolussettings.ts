import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SettingsServiceProvider } from '../../providers/settings-service/settings-service';


@Component({
  selector: 'page-bolusbettings',
  templateUrl: 'bolussettings.html'
})
export class BolusSettingsPage {

  constructor(public navCtrl: NavController, public dataService: SettingsServiceProvider) {

  }

}
