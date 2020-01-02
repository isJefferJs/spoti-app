import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

// Con el providedIn: 'root' no hay que poner el provider en el app.module
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  constructor(
    private http: HttpClient
  ) {}

  public getData( query: string ){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQA2X0waSXtgSU4b9USyXUmO_8q2Ui8weWgYMR0FgZ_gewo2nuU9sPXccCa0c8y9KKdqrifCO_FOI7UTBRw'
    });

    return this.http.get(`https://api.spotify.com/v1/${query}`, { headers });
  }

  public getNewReleases() {
    return  this.getData('browse/new-releases')
                .pipe( map( (data: any) => data.albums.items ));              
  }

  public getArtist(termino: string) {
    return  this.getData(`search?q=${termino}&type=artist&limit=10`)
                .pipe( map( (data: any) => data.artists.items ));
  }
}
