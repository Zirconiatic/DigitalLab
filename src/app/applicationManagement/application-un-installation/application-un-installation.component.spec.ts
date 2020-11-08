import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationUnInstallationComponent } from './application-un-installation.component';

describe('ApplicationUnInstallationComponent', () => {
  let component: ApplicationUnInstallationComponent;
  let fixture: ComponentFixture<ApplicationUnInstallationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationUnInstallationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationUnInstallationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
