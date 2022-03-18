import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { 
    path: 'home', 
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) 
  },
  { 
    path: 'room', 
    loadChildren: () => import('./modules/room/room.module').then(m => m.RoomModule) 
  },
  { 
    path: '**', 
    loadChildren: () => import('./modules/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule) 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
