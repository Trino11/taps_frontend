import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CookieService } from 'ngx-cookie-service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { ProxyHassComponent } from './components/dashboard/proxy-hass/proxy-hass.component';
import { SidebarComponent } from './components/dashboard/sidebar/sidebar.component';
import { AdminManagePanelComponent } from './components/dashboard/admin-manage-panel/admin-manage-panel.component';
import { AdminNavbarComponent } from './components/dashboard/admin-manage-panel/admin-navbar/admin-navbar.component';
import { AdminUsersComponent } from './components/dashboard/admin-manage-panel/admin-users/admin-users.component';
import { AdminInstancesComponent } from './components/dashboard/admin-manage-panel/admin-instances/admin-instances.component';
import { AdminRolesComponent } from './components/dashboard/admin-manage-panel/admin-roles/admin-roles.component';
import { CreateUserFormComponent } from './components/dashboard/admin-manage-panel/modals/create-user-form/create-user-form.component';
import { UpdateUserFormComponent } from './components/dashboard/admin-manage-panel/modals/update-user-form/update-user-form.component';
import { CreateInstanceFormComponent } from './components/dashboard/admin-manage-panel/modals/create-instance-form/create-instance-form.component';
import { UpdateInstanceFormComponent } from './components/dashboard/admin-manage-panel/modals/update-instance-form/update-instance-form.component';
import { CreateInstanceMinecraftComponent } from './components/dashboard/templates/minecraft/create-instance-minecraft/create-instance-minecraft.component';
import { CreateInstanceOtherComponent } from './components/dashboard/templates/other/create-instance-other/create-instance-other.component';
import { SubscribeUserFormComponent } from './components/dashboard/admin-manage-panel/modals/subscribe-user-form/subscribe-user-form.component';
import { CreateUserByTokenComponent } from './components/create-user-by-token/create-user-by-token.component';
import { InstancesComponent } from './components/dashboard/instances/instances.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    NavbarComponent,
    DashboardComponent,
    ProxyHassComponent,
    SidebarComponent,
    AdminManagePanelComponent,
    AdminNavbarComponent,
    AdminUsersComponent,
    AdminInstancesComponent,
    AdminRolesComponent,
    CreateUserFormComponent,
    UpdateUserFormComponent,
    CreateInstanceFormComponent,
    UpdateInstanceFormComponent,
    CreateInstanceMinecraftComponent,
    CreateInstanceOtherComponent,
    SubscribeUserFormComponent,
    CreateUserByTokenComponent,
    InstancesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CookieService, {
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
