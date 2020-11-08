import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationInstallationComponent } from './application-installation.component';

describe('ApplicationInstallationComponent', () => {
  let component: ApplicationInstallationComponent;
  let fixture: ComponentFixture<ApplicationInstallationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationInstallationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationInstallationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
