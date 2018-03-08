import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalleClubPage } from './detalle-club';

@NgModule({
  declarations: [
    DetalleClubPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalleClubPage),
  ],
})
export class DetalleClubPageModule {}
