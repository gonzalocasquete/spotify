import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-play-list-header',
  templateUrl: './play-list-header.component.html',
  styleUrl: './play-list-header.component.css'
})

export class PlayListHeaderComponent implements OnInit {
   @Input() title?: string;
   
    constructor(){}
  
    ngOnInit(): void{}
  

}
