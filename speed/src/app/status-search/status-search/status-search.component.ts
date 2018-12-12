import { Component, OnInit } from '@angular/core';
import { State } from 'src/app/store';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-status-search',
  templateUrl: './status-search.component.html',
  styleUrls: ['./status-search.component.css']
})
export class StatusSearchComponent implements OnInit {

  public status;
  public filteredLaunches: any[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<State>,
    private location: Location

  ) {}

  ngOnInit() {
    this.store
      .select('status')
      .subscribe(statusesState => {
        const id = this.activatedRoute.snapshot.params['id'];
        this.status = statusesState.statuses.filter(
          s => s.id.toString() === id
        )[0];
      });

    this.store.select('launch').subscribe(launchesState => {
        this.filteredLaunches = launchesState.launches.filter(
          l => l.status === this.status.id
        );

        this.filteredLaunches = this.filteredLaunches.sort((val1, val2) => new Date(val2.net).getTime() - new Date(val1.net).getTime() );
      }
    );

  }

  backButtomClick = () => {this.location.back(); };

  optionSortChange = (sortValue) => {
    if (sortValue === '1') {
      this.filteredLaunches = this.filteredLaunches.sort((val1, val2) => new Date(val2.net).getTime() - new Date(val1.net).getTime() );
    } else {
      this.filteredLaunches = this.filteredLaunches.sort((val1, val2) => new Date(val1.net).getTime() - new Date(val2.net).getTime() );
    }
  }
}
