import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserlabComponent } from './browserlab.component';

describe('BrowserlabComponent', () => {
  let component: BrowserlabComponent;
  let fixture: ComponentFixture<BrowserlabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowserlabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowserlabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
