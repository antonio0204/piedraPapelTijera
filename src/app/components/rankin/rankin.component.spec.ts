import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankinComponent } from './rankin.component';

describe('RankinComponent', () => {
  let component: RankinComponent;
  let fixture: ComponentFixture<RankinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RankinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RankinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
