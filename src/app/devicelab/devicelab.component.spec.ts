import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicelabComponent } from './devicelab.component';

describe('DevicelabComponent', () => {
  let component: DevicelabComponent;
  let fixture: ComponentFixture<DevicelabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevicelabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicelabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
