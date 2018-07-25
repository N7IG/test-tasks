import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PathControlComponent } from './path-control.component';

describe('PathControlComponent', () => {
  let component: PathControlComponent;
  let fixture: ComponentFixture<PathControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PathControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PathControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
