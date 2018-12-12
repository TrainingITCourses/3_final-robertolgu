import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-launch-list',
  templateUrl: './launch-list.component.html',
  styleUrls: ['./launch-list.component.css']
})
export class LaunchListComponent implements OnInit {

  @Input() public filteredLaunches: any[];
  @Output() public optionSortChange = new EventEmitter<string>();

  optionsSort = [
    {name: 'Más reciente', value: 1},
    {name: 'Más antiguo', value: 2}
  ];

  constructor() { }

  ngOnInit() {
  }

}
