import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public newSogns: any[] = [];
  constructor(
    public spotifyService: SpotifyService
  ) {
    this.spotifyService.getNewReleases()
        .subscribe(
          data => {
            console.log(data)
            this.newSogns = data.albums.items;
          }
        );
  }

  ngOnInit() {
  }
}
