import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { SetEnvironmentComponent } from './set-environment/set-environment.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LoginDomainComponent } from './login-domain/login-domain.component';
import { CustomizationComponent } from './customization/customization.component';
import { PreviewComponent } from './preview/preview.component';
import { OverviewComponent } from './overview/overview.component';
import { CreateProgramComponent } from './create-program/create-program.component';
import { SetailsProgramComponent } from './setails-program/setails-program.component';
import { MaterialModule } from './material-module';
import { ColorSketchModule } from 'ngx-color/sketch';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    SetEnvironmentComponent,
    HomeComponent,
    LoginComponent,
    LoginDomainComponent,
    CustomizationComponent,
    PreviewComponent,
    OverviewComponent,
    CreateProgramComponent,
    SetailsProgramComponent
  ],
  imports: [
    ColorSketchModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
