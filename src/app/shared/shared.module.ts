import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MediaPlayerComponent } from '../shared/components/media-player/media-player.component';
import { HeaderUserComponent } from '../shared/components/header-user/header-user.component';




@NgModule({
  declarations: [
    //TODO: ver el tema de las declaratrions
  ],
  imports: [
    SideBarComponent,
    MediaPlayerComponent,
    HeaderUserComponent,
    CommonModule,
  ],
  exports: [
    SideBarComponent,
    MediaPlayerComponent,
    HeaderUserComponent,
    CommonModule,
  ]
})
export class SharedModule { }
