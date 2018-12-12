import { LaunchListComponent } from './launch-list/launch-list.component';
import { LaunchCardComponent } from './launch-card/launch-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [LaunchCardComponent, LaunchListComponent],
  exports: [LaunchCardComponent, LaunchListComponent, RouterModule]
})
export class SharedModule { }
