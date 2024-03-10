import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackPageComponent } from './pages/track-page/track-page.component';
import { TracksRoutingModule } from './tracks-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    TrackPageComponent
  ],
  imports: [
    CommonModule,
    TracksRoutingModule,
    SharedModule
  ],
 
})
export class TracksModule { }
