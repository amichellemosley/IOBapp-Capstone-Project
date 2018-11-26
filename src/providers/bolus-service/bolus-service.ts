import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BolusServiceProvider {
  title = "Bolus Settings";
  items = []

  constructor(public http: HttpClient) {
    console.log('');
  }


getItems() { return this.items;

}

  removeItem(index){this.items.splice(index, 1);

  }

  addItem(item) {this.items.push(item);}

  editItem(item,index) {this.items[index] = item;

  }
}

