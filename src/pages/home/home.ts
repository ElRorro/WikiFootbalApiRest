import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Club } from '../../modelos/club';
import { ClubsserviceProvider } from '../../providers/clubsservice/clubsservice';
import { FormularioPage } from '../formulario/formulario';
import { UpdatePage } from '../update/update';
import { DetalleClubPage } from '../detalle-club/detalle-club';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  clubs:Observable<Club[]>;
  constructor(public navCtrl: NavController, private clubsService:ClubsserviceProvider) {
    this.clubs = this.clubsService.getClubs();
  }

  public eliminarClub(club:Club){
    console.log("Eliminando club con id: " + club.code);
    this.clubs = this.clubsService.deleteClub(club);
    
  }

  public gotoFormulario() {
    this.navCtrl.push(FormularioPage);
  }

  public openEdit(club:Club){
    console.log("Actualizando club con id: " + club.code);
    this.navCtrl.push(UpdatePage, {parametrosClub: club});
  }

  public openDetails(club: Club){
    console.log("Detalle club con id: " + club.code);
    this.navCtrl.push(DetalleClubPage, {paramsDetalle: club});
  }
}
