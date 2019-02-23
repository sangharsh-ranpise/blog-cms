import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaymanTechContentComponent } from './layman-tech-content.component';

describe('LaymanTechContentComponent', () => {
  let component: LaymanTechContentComponent;
  let fixture: ComponentFixture<LaymanTechContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaymanTechContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaymanTechContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
