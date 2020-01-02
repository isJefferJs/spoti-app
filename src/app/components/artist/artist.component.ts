import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  public idArtist: string;
  public artist: any = {};
  public loading: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    public spotifyService: SpotifyService
  ) {
    this.loading = true;

    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.idArtist = params.id;
        return this.getArtist(this.idArtist);
      }
    );
  }

  ngOnInit() {
  }

  public getArtist(id: string) {
    return this.spotifyService.getArtist(this.idArtist).subscribe(
      (artist: any) => {
        this.artist = artist;
        this.loading = false;
        console.log(artist);
      }
    );
  }

}
