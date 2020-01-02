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

  public getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQALP_1YjKIMa0VcZiH4N4w0iiDtfdW-dU0sLD8cjDKIDqx4LFkEPVdOB4ABceaLXw5xljmJ4_OFqwjcpdRKq6gaZWTWZBRDObEMEHGxVrlfd40KNUooOeSPtOMFCJaKWxPkIEotTpY989_QWva3WaFd8EuQuGySo3VbEfKIMGStinFty3W0RpBAki1Z3s-a64a0nx8zYN-1UgSoUiJyYTcV7pAwRFKWUxyX9VjmdYDX3kHFIZJu2oy1LDJV2V99mFvLG703vJWcD600p-3A0Sc0cIIv9MOaJg'
    });

    return  this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
                .pipe( map( (data: any) => data.albums.items ) );
  }

  public getArtist(termino: string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQALP_1YjKIMa0VcZiH4N4w0iiDtfdW-dU0sLD8cjDKIDqx4LFkEPVdOB4ABceaLXw5xljmJ4_OFqwjcpdRKq6gaZWTWZBRDObEMEHGxVrlfd40KNUooOeSPtOMFCJaKWxPkIEotTpY989_QWva3WaFd8EuQuGySo3VbEfKIMGStinFty3W0RpBAki1Z3s-a64a0nx8zYN-1UgSoUiJyYTcV7pAwRFKWUxyX9VjmdYDX3kHFIZJu2oy1LDJV2V99mFvLG703vJWcD600p-3A0Sc0cIIv9MOaJg'
    });

    return  this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=10`, { headers })
                .pipe( map( (data: any) => data.artists.items ) );
  }
}
