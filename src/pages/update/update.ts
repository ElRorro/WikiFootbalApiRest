import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Club } from '../../modelos/club';
import { ClubsserviceProvider } from '../../providers/clubsservice/clubsservice';
import { HomePage } from '../home/home';

/**
 * Generated class for the UpdatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-update',
  templateUrl: 'update.html',
})
export class UpdatePage {
  
  public club:Club;
  public logo: string;
  public key: string;
  public name: string;
  public code: string;
  public ligue: string;
  public country: string;


  constructor(public navCtrl: NavController, public navParams: NavParams, private clubsService:ClubsserviceProvider) {
    this.club = navParams.get("parametrosClub");
    this.logo = this.club.logo;
    this.key = this.club.key;
    this.name = this.club.name;
    this.code = this.club.code;
    this.ligue = this.club.ligue;
    this.country = this.club.country;
  }

  updateClub() {
    this.club.logo = this.logo;
    this.club.key = this.key;
    this.club.name = this.name;
    this.club.code = this.code;
    this.club.ligue = this.ligue;
    this.club.country = this.country;

    this.clubsService.updateClub(this.club);
    this.navCtrl.push(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdatePage');
  }

}
