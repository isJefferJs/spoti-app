import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Con el providedIn: 'root' no hay que poner el provider en el app.module
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  constructor(
    private http: HttpClient
  ) {}

  public getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCZwlluAjeGKqvzuuKd3sFMcZf6tuaQt4U6QD6iinjS65By1GX32kb36BkDpELJ1IZOhS6aFxMy6u9sK_s'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }
}
