import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store';
import { Location } from '@angular/common';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.css']
})
export class LaunchComponent implements OnInit {

  public launch;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<State>,
    private location: Location
  ) { }

  ngOnInit() {

    this.store
    .select('launch')
    .subscribe(launches => {
      const id = this.activatedRoute.snapshot.params['id'];
      this.launch = launches.launches.filter(
        l => l.id.toString() === id
      )[0];

    });
  }

  backButtomClick = () => {this.location.back(); };
}
