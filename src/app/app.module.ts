import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { Diary } from '../pages/bolusdiary/bolusdiary';
import { settings } from '../pages/bolussettings/bolussettings';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BolusServiceProvider } from '../providers/bolus-service/bolus-service';
import { BolusInputsServiceProvider } from '../providers/bolus-inputs/bolus-inputs';

@NgModule({
  declarations: [
    MyApp,
    Diary,
    settings,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Diary,
    settings,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BolusServiceProvider,
    BolusInputsServiceProvider
  ]
})
export class AppModule {}
