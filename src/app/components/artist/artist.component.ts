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
  public topTracks: any[] = [];
  public loading: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    public spotifyService: SpotifyService
  ) {
    this.loading = true;

    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.idArtist = params.id;
        this.getArtist(this.idArtist);
        this.getTopTracks(this.idArtist);
      }
    );
  }

  ngOnInit() {
  }

  public getArtist(id: string) {
    this.spotifyService.getArtist(id).subscribe(
      (artist: any) => {
        this.artist = artist;
        this.loading = false;
        console.log(artist);
      }
    );
  }

  public getTopTracks(id: string) {
    this.spotifyService.getTopTracks(id).subscribe(
      (topTracks: any) => {
        console.log(topTracks);
        this.topTracks = topTracks;
      }
    );
  }

}
