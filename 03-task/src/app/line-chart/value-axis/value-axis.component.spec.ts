import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueAxisComponent } from './value-axis.component';

describe('ValueAxisComponent', () => {
  let component: ValueAxisComponent;
  let fixture: ComponentFixture<ValueAxisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValueAxisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueAxisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
