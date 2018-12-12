import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ApiService } from '../store/api.service';
import { Store } from '@ngrx/store';
import { State } from '../store';
import { LoadLaunches } from '../store/launch/launch.actions';
import { LoadStatuses } from '../store/status/status.actions';


@Component({
  selector: 'app-shell-container',
  templateUrl: './shell-container.component.html',
  styleUrls: ['./shell-container.component.css']
})
export class ShellContainerComponent implements OnInit {

  public loaded = true;

  constructor(
    private store: Store<State>,
    private cdr: ChangeDetectorRef
  ) { }

  public ngOnInit(): void {
    this.loadData();
    this.observeLoading();
  }

  private loadData() {
    this.store.dispatch(new LoadLaunches());
    this.store.dispatch(new LoadStatuses());
  }

  private observeLoading() {
    this.store.select('launch').subscribe(st => {
      if (st.loading) {
        this.loaded = false;
      } else {
        this.loaded = true;
      }
     this.cdr.detectChanges();
    });
  }
}
