import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MediaPlayerComponent } from '../shared/components/media-player/media-player.component';
import { HeaderUserComponent } from '../shared/components/header-user/header-user.component';
import { CardPlayerComponent } from '../shared/components/card-player/card-player.component';
import { SectionGenericComponent } from '../shared/components/section-generic/section-generic.component';


@NgModule({
  declarations: [
    SideBarComponent,
    MediaPlayerComponent,
    HeaderUserComponent,
    CardPlayerComponent,
    SectionGenericComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SideBarComponent,
    MediaPlayerComponent,
    HeaderUserComponent,
    CardPlayerComponent,
    SectionGenericComponent
  ]
})
export class SharedModule { }
