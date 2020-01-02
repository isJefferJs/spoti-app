import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  public idArtist: string;

  constructor(
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.idArtist = params.id;
      }
    )
  }

  ngOnInit() {
  }

}
