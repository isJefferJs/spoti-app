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

  private getData( query: string ){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDSorHowSf0lUYcc0Nbmbz4Z3M7yuFIvQ1EYgxp-bBiIyybqxH7M3DXRxgMfqqt9faVwwzPMMoJylcRtyI'
    });

    return this.http.get(`https://api.spotify.com/v1/${query}`, { headers });
  }

  public getNewReleases() {
    return  this.getData('browse/new-releases')
                .pipe( map( (data: any) => data.albums.items ));              
  }

  public getArtists(termino: string) {
    return  this.getData(`search?q=${termino}&type=artist&limit=10`)
                .pipe( map( (data: any) => data.artists.items ));
  }

  public getArtist(id: string) {
    return this.getData(`artists/${id}`);
  }
}
