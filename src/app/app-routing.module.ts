import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component'
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { TokenGuard } from './guards/token.guard';
import { CreateUserByTokenComponent } from './components/create-user-by-token/create-user-by-token.component';
import { InstancesComponent } from './components/dashboard/instances/instances.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'register/:token',
    component: CreateUserByTokenComponent,
    pathMatch: 'prefix'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    pathMatch: 'prefix',
    canActivate: [TokenGuard]
  },
  {
    path: 'dashboard/hass',
    component: DashboardComponent,
    pathMatch: 'prefix',
    canActivate: [TokenGuard]
  },
  {
    path: 'dashboard/instance/:iid',
    component: InstancesComponent,
    pathMatch: 'full',
    canActivate: [TokenGuard]
  },
  {
    path: 'dashboard/admin',
    component: DashboardComponent,
    pathMatch: 'prefix',
    canActivate: [TokenGuard]
  },
  {
    path: 'dashboard/admin/users',
    component: DashboardComponent,
    pathMatch: 'prefix',
    canActivate: [TokenGuard]
  },
  {
    path: 'dashboard/admin/instances',
    component: DashboardComponent,
    pathMatch: 'prefix',
    canActivate: [TokenGuard]
  },
  {
    path: 'dashboard/admin/roles',
    component: DashboardComponent,
    pathMatch: 'prefix',
    canActivate: [TokenGuard]
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
