import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { BolusDiaryPage } from '../pages/bolusdiary/bolusdiary';
import { BolusSettingsPage } from '../pages/bolussettings/bolussettings';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CalculatorServiceProvider } from '../providers/calculator-service/calculator-service';
import { SettingsServiceProvider } from '../providers/settings-service/settings-service';

@NgModule({
  declarations: [
    MyApp,
    BolusDiaryPage,
    BolusSettingsPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BolusDiaryPage,
    BolusSettingsPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CalculatorServiceProvider,
    SettingsServiceProvider
  ]
})
export class AppModule {}
