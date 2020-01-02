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
      'Authorization': 'Bearer BQAObjlP9AyT1OmF2bhXeodV7UliadqkOBOcEj1YWtBSLh5TfthCOwfaDF0Af8HJpKc62SmcTttRZeAMSVU'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }
}
