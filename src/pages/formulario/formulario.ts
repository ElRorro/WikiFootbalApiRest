import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Club } from '../../modelos/club';
import { ClubsserviceProvider } from '../../providers/clubsservice/clubsservice';
import { HomePage } from '../home/home';

/**
 * Generated class for the FormularioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-formulario',
  templateUrl: 'formulario.html',
})
export class FormularioPage {

  public club:Club;
  public logo: string;
  public key: string;
  public name: string;
  public code: string;
  public ligue: string;
  public country: string;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private clubsService:ClubsserviceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormularioPage');
  }

  public postClub(){
    let club:Club = new Club();
    club.logo = this.logo;
    club.key = this.key;
    club.name = this.name;
    club.code = this.code;
    club.ligue = this.ligue;
    club.country = this.country;
    
    this.clubsService.addClub(club);
    this.navCtrl.setRoot(HomePage);        
  }
}
