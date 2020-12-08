import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { VisualizationPage } from '../pages/visualization/visualization';
import { RawDataPage } from '../pages/raw-data/raw-data';
import { AddDataPage } from '../pages/add-data/add-data';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AddingProvider } from '../providers/adding/adding'
import { HttpClientModule } from '@angular/common/http';
import { SearchDataProvider } from '../providers/searchData/searchData';

@NgModule({
  declarations: [
    MyApp,
    RawDataPage,
    AddDataPage,
    HomePage,
    VisualizationPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RawDataPage,
    AddDataPage,
    HomePage,
    VisualizationPage,
    TabsPage
  ],
  providers: [
    AddingProvider,
    SearchDataProvider,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
