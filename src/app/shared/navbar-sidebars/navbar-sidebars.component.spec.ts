import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarSidebarsComponent } from './navbar-sidebars.component';

describe('NavbarSidebarsComponent', () => {
  let component: NavbarSidebarsComponent;
  let fixture: ComponentFixture<NavbarSidebarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarSidebarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarSidebarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
