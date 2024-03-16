import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from 'src/app/core/models/tracks.models';
import { MultimediaService } from '../../services/multimedia.service';
import { Subscription } from 'rxjs'; //Programacion reactiva

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.css'
})
export class MediaPlayerComponent implements OnInit, OnDestroy {
  mockCover: TrackModel = {
    cover: 'https://i.scdn.co/image/ab67616d0000b27345ca41b0d2352242c7c9d4bc',
    album: 'Gioli & Assia',
    name: 'BEBE (Oficial)',
    url: '',
    _id: 1
  }

  listObservers$ : Array<Subscription> = [];

  constructor(private multimediaService: MultimediaService){}

  ngOnInit(): void{
    const observer1$ : Subscription= this.multimediaService.callback.subscribe(
    (response: TrackModel) => {
      console.log('Recibiendo cancion...', response);
    });

    this.listObservers$ = [observer1$];
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(element => { element.unsubscribe });
    console.log('BOOOOOOOOM!');
  }

}
