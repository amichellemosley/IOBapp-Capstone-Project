import { Component } from '@angular/core';

import { Diary } from '../bolusdiary/bolusdiary';
import { settings } from '../bolussettings/bolussettings';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = Diary;
  tab3Root = settings;

  constructor() {

  }
}
