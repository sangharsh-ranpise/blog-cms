import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTopicsCardComponent } from './all-topics-card.component';

describe('AllTopicsCardComponent', () => {
  let component: AllTopicsCardComponent;
  let fixture: ComponentFixture<AllTopicsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllTopicsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTopicsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
