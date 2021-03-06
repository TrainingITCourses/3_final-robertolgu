import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusSearchComponent } from './status-search.component';

describe('StatusSearchComponent', () => {
  let component: StatusSearchComponent;
  let fixture: ComponentFixture<StatusSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
