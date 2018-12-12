import { State } from './../../store/index';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public statuses: any[];

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.store
      .select('status')
      .subscribe(statusesState => (this.statuses = statusesState.statuses));

  }

}
