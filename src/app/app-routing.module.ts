import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './signup/signup.component';
import { SetEnvironmentComponent } from './set-environment/set-environment.component';
import { HomeComponent } from './home/home.component';
import { OverviewComponent } from './overview/overview.component';
import { LoginComponent } from './login/login.component';
import { LoginDomainComponent } from './login-domain/login-domain.component';
import { CustomizationComponent } from './customization/customization.component';

const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'set-environment', component: SetEnvironmentComponent },
  { path: 'home', component: HomeComponent },
  { path: 'overview', component: OverviewComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login-domain', component: LoginDomainComponent },
  { path: 'customization', component: CustomizationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
