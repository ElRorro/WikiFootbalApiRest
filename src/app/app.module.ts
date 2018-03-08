import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ClubsserviceProvider } from '../providers/clubsservice/clubsservice';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UpdatePage } from '../pages/update/update';
import { FormularioPage } from '../pages/formulario/formulario';
import { DetalleClubPage } from '../pages/detalle-club/detalle-club';
import { FormularioPageModule } from '../pages/formulario/formulario.module';
import { UpdatePageModule } from '../pages/update/update.module';
import { DetalleClubPageModule } from '../pages/detalle-club/detalle-club.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UpdatePage,
    FormularioPage,
    DetalleClubPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    UpdatePage,
    FormularioPage,
    DetalleClubPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ClubsserviceProvider
  ]
})
export class AppModule {}
