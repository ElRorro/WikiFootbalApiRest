import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Club } from '../../modelos/club';
import { map } from 'rxjs/operators';
/*
  Generated class for the ClubsserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ClubsserviceProvider {

  private clubs:Observable<Club[]>;

  private apiUrl: string = 'http://localhost:3000/Clubs/';
  constructor(public http: HttpClient) {
    console.log('Hello ClubsserviceProvider Provider');
    this.apiUrl = 'http://localhost:3000/Clubs/';
    this.clubs = this.http.get<Club[]>(this.apiUrl);
  }

  getClubs() : Observable<Club[]>{
    return this.clubs;
  }

  deleteClub(club:Club) : Observable<Club[]>{
    console.log('Eliminando liquido ' + club.ligue);
    this.apiUrl = 'http://localhost:3000/Clubs/';
    this.apiUrl = this.apiUrl + "/" + club.ligue;
    this.http.delete(this.apiUrl).subscribe();
    return this.clubs.pipe(
        map(clubs => clubs.filter(l=> {
          if (l.ligue == club.ligue) {
            return false;
          } return true;
        }
        ))
      );
  }

  addClub(club:Club){
    this.http.post<Club>(this.apiUrl, club).subscribe();
  }

  updateClub(club:Club){
    console.log(club);
    this.apiUrl = 'http://localhost:3000/Clubs/' + club.code;
    this.http.put<Club>(this.apiUrl, club).subscribe();
  }

}
