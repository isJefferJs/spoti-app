import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public newSogns: any[] = [];
  public loading: boolean;

  constructor(
    public spotifyService: SpotifyService
  ) {
    this.loading = true;
    
    this.spotifyService.getNewReleases()
    .subscribe((data: any) => {
      this.newSogns = data;
      this.loading = false;
    });
  }

  ngOnInit() {
  }
}
