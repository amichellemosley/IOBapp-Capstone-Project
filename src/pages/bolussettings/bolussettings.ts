
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { BolusServiceProvider } from '../../providers/bolus-service/bolus-service';
import { BolusInputsServiceProvider } from '../../providers/bolus-inputs/bolus-inputs';


@Component({
  selector: 'page-settings',
  templateUrl: 'bolussettings.html'
})
export class settings {

  constructor(public navCtrl: NavController, public bolusinputs : BolusInputsServiceProvider, public toastCtrl: ToastController, public alertCtrl: AlertController, public dataService: BolusServiceProvider) {

  }

loadItems() {
  return this.dataService.getItems();
}

removeItem(item, index) {
  console.log("Removing -- ", item, index);
  const toast = this.toastCtrl.create({
    message: 'Removing --' + index + "...",
    duration: 3000});
    toast.present();
    this.dataService.removeItem(index);
    
}



editItem(item, index) {
  console.log("Editing -- ", item, index);
  const toast = this.toastCtrl.create({
    message: 'Editing --' + index + "...",
    duration: 3000});
    toast.present();
    this.bolusinputs.showPrompt(item,index);
 
}
addItem() { 
  console.log("Adding");

  this.bolusinputs.showPrompt();
}




}

