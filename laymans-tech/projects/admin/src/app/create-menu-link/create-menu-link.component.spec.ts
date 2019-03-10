import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMenuLinkComponent } from './create-menu-link.component';

describe('CreateMenuLinkComponent', () => {
  let component: CreateMenuLinkComponent;
  let fixture: ComponentFixture<CreateMenuLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMenuLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMenuLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
