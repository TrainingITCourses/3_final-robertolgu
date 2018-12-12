import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatusSearchRoutingModule } from './status-search-routing.module';
import { StatusSearchComponent } from './status-search/status-search.component';

@NgModule({
  imports: [
    CommonModule,
    StatusSearchRoutingModule,
    SharedModule,
    RouterModule
  ],
  declarations: [StatusSearchComponent],
  exports: [RouterModule]
})
export class StatusSearchModule { }
