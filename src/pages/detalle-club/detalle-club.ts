import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Club } from '../../modelos/club';

/**
 * Generated class for the DetalleClubPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalle-club',
  templateUrl: 'detalle-club.html',
})
export class DetalleClubPage {

  public club:Club;
  public logo: string;
  public key: string;
  public name: string;
  public code: string;
  public ligue: string;
  public country: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.club = navParams.get("paramsDetalle");
    this.logo = this.club.logo;
    this.key = this.club.key;
    this.name = this.club.name;
    this.code = this.club.code;
    this.ligue = this.club.ligue;
    this.country = this.club.country;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalleClubPage');
  }
}
