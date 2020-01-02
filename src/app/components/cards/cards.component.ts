import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() public items: any[] = [];
  @Input() public isSong = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  verArtist(item: any) {
    const id: string = (item.type === 'artist')
      ? item.id
      : item.artists[0].id;
    this.router.navigate(['/artist', id]);
  }
}
