import { Component } from '@angular/core';

import { BolusDiaryPage } from '../bolusdiary/bolusdiary';
import { HelpPage } from '../help/help';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = BolusDiaryPage;
  tab3Root = HelpPage;

  constructor() {

  }
}
