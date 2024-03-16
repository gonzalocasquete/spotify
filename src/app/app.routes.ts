import { Routes } from '@angular/router';
import { HomePageComponent } from './modules/home/pages/home-page/home-page.component';

//Lo que se ponga aqui destruira todo lo de despues, es decir, modificar una ruta aqui dest ruira side-bar, media-player...
export const routes: Routes = [ 
    {
        path:'auth', 
        loadChildren: () =>import('./modules/auth/auth.module').then(m => m.AuthModule)
    },
    {
        path:'', 
        component: HomePageComponent,
        loadChildren: () =>import('./modules/home/home.module').then(m => m.HomeModule)
    }
];

