
import { Injectable } from '@angular/core';
import { BolusServiceProvider } from '../../providers/bolus-service/bolus-service';
import { AlertController } from 'ionic-angular';

@Injectable()
export class BolusInputsServiceProvider {


  constructor(public alertCtrl: AlertController, public dataService: BolusServiceProvider) {
    console.log('');
  }



  showPrompt(item, index) {
    const prompt = this.alertCtrl.create({
      title: item? 'Edit Item' : 'Add Item',
      message: item? "" : "" ,
      inputs: [
        {
          name: 'carbratio',
          placeholder: 'carbratio',
          value: item? item.carbratio : null 
        },

      {
        name: 'sensitivityratio',
        placeholder: 'sensitivityratio',
        value: item? item.sensitivityratio : null
      },
      {
        name: 'activetime',
        placeholder: 'activetime',
        value: item? item.activetime : null
      },


    ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: item => {
            console.log('Saved clicked', item);
            if (index !== undefined) {
              this.dataService.editItem(item,index);
            }
            else {
              this.dataService.addItem(item);
            }
           
          }
        }
      ]
    });
    prompt.present();}


  }
