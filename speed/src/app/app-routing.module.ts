import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'launch/:id',
    loadChildren: './launch/launch.module#LaunchModule'
  },
  {
    path: 'status/:id',
    loadChildren: './status-search/status-search.module#StatusSearchModule'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
