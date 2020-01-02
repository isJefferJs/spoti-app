import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public artists: any[] = [];

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit() {
  }

  buscar(termino: string) {
    this.spotifyService.getArtists(termino)
        .subscribe((data: any) => {
          this.artists = data;
        });
  }
}
