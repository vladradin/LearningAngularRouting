import { NgModule } from '@angular/core';

import { LoginComponent } from './login.component';
import { AuthService } from './auth.service';

import { SharedModule } from '../shared/shared.module';

import { RouterModule, Routes } from '@angular/router';

const userRoutes: Routes = [
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(userRoutes)
  ],
  declarations: [
    LoginComponent
  ],
  providers: [
    AuthService
  ]
})
export class UserModule { }
