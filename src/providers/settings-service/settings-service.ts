import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  take your settings after inputted and use it with your calculator-service also
*/
@Injectable()
export class SettingsServiceProvider {


getSettings(){return this.http.get('https://someserver.com/api/users')}
/*get your settings from the bolussettings html page, add it to the db*/

addSettings(){return this.http.post('https://someserver.com/api/users')}


  constructor(public http: HttpClient) {
    console.log('Hello SettingsServiceProvider Provider');
  }

}
