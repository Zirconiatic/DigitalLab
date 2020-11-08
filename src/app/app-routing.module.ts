import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationInstallationComponent } from './applicationManagement/application-installation/application-installation.component';
import { ApplicationUnInstallationComponent } from './applicationManagement/application-un-installation/application-un-installation.component';
import { AllRunsComponent } from './automate/all-runs/all-runs.component';
import { CreateRunComponent } from './automate/create-run/create-run.component';
import { BrowserlabComponent } from './browserlab/browserlab.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DevicelabComponent } from './devicelab/devicelab.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { BrowserUsageComponent } from './usageReport/browser-usage/browser-usage.component';
import { DeviceUsageComponent } from './usageReport/device-usage/device-usage.component';
import { UserUsageComponent } from './usageReport/user-usage/user-usage.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:"login",component:LoginComponent},
  {path:"dashboard/:name",component:DashboardComponent, canActivate:[RouteGuardService]},
  {path:"browserlab",component:BrowserlabComponent, canActivate:[RouteGuardService]},
  {path:"devicelab",component:DevicelabComponent, canActivate:[RouteGuardService]},
  {path:"deviceusage",component:DeviceUsageComponent, canActivate:[RouteGuardService]},
  {path:"browserusage",component:BrowserUsageComponent, canActivate:[RouteGuardService]},
  {path:"userusage",component:UserUsageComponent, canActivate:[RouteGuardService]},
  {path:"application/installation",component:ApplicationInstallationComponent, canActivate:[RouteGuardService]},
  {path:"application/uninstallation",component:ApplicationUnInstallationComponent, canActivate:[RouteGuardService]},
  {path:"allruns",component:AllRunsComponent, canActivate:[RouteGuardService]},
  {path:"create/newrun",component:CreateRunComponent, canActivate:[RouteGuardService]},
  {path:"logout",component:LogoutComponent, canActivate:[RouteGuardService]},
  {path:"**",component:ErrorComponent, canActivate:[RouteGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
