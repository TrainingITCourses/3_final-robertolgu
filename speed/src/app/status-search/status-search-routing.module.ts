import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatusSearchComponent } from './status-search/status-search.component';

const routes: Routes = [
  {
    path: '',
    component: StatusSearchComponent
    }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatusSearchRoutingModule { }
