import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-launch-card',
  templateUrl: './launch-card.component.html',
  styleUrls: ['./launch-card.component.css']
})
export class LaunchCardComponent implements OnInit {

  @Input() public launch: any = null;
  @Input() public statuses: any[];

  constructor() { }

  ngOnInit() {
  }

}
