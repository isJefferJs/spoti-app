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
      'Authorization': 'Bearer BQB_nZwTKT2yC6sZutZ-KvU4V6b-7RRWbgyAmOOP1kJWbTmydv0Jl93DhVhl5LAdg3BzledUymgqSFdBHXI'
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
