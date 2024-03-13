import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MediaPlayerComponent } from '../shared/components/media-player/media-player.component';
import { HeaderUserComponent } from '../shared/components/header-user/header-user.component';
import { CardPlayerComponent } from '../shared/components/card-player/card-player.component';
import { SectionGenericComponent } from '../shared/components/section-generic/section-generic.component';
import { PlayListHeaderComponent } from '../shared/components/play-list-header/play-list-header.component';
import { PlayListBodyComponent } from '../shared/components/play-list-body/play-list-body.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SideBarComponent,
    MediaPlayerComponent,
    HeaderUserComponent,
    CardPlayerComponent,
    SectionGenericComponent,
    PlayListHeaderComponent,
    PlayListBodyComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SideBarComponent,
    MediaPlayerComponent,
    HeaderUserComponent,
    CardPlayerComponent,
    SectionGenericComponent,
    PlayListHeaderComponent,
    PlayListBodyComponent
  ]
})
export class SharedModule { }
