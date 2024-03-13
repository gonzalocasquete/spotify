import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite-page',
  templateUrl: './favorite-page.component.html',
  styleUrl: './favorite-page.component.css'
})
export class FavoritePageComponent implements OnInit {
  title:string = "Canciones que te gustan";
  constructor(){}

  ngOnInit(): void {}
}
