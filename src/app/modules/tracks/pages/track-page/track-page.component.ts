import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-track-page',
  templateUrl: './track-page.component.html',
  styleUrl: './track-page.component.css'
})
export class TrackPageComponent implements OnInit{
  mockTracksList = [
    {
      name: 'BEBE (Oficial)'
    },
    {
      name: 'BEBE (Oficial)'
    },
    {
      name: 'BEBE (Oficial)'
    }
  ]
  constructor(){}

  ngOnInit(): void{}

}
 