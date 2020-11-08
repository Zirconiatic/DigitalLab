import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { DevicelabComponent } from './devicelab/devicelab.component';
import { BrowserlabComponent } from './browserlab/browserlab.component';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';
import { AllRunsComponent } from './automate/all-runs/all-runs.component';
import { CreateRunComponent } from './automate/create-run/create-run.component';
import { ApplicationInstallationComponent } from './applicationManagement/application-installation/application-installation.component';
import { ApplicationUnInstallationComponent } from './applicationManagement/application-un-installation/application-un-installation.component';
import { DeviceUsageComponent } from './usageReport/device-usage/device-usage.component';
import { BrowserUsageComponent } from './usageReport/browser-usage/browser-usage.component';
import { UserUsageComponent } from './usageReport/user-usage/user-usage.component';
import { LogoutComponent } from './logout/logout.component';
import { MenuComponent } from './menu/menu.component';

//following 2 dependencies are for swimlane ngx charts both are needed
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    DevicelabComponent,
    BrowserlabComponent,
    ErrorComponent,
    AllRunsComponent,
    CreateRunComponent,
    ApplicationInstallationComponent,
    ApplicationUnInstallationComponent,
    DeviceUsageComponent,
    BrowserUsageComponent,
    UserUsageComponent,
    LogoutComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
