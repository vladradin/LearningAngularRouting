import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from './auth.service';

import { Router } from '@angular/router';

@Component({
    templateUrl: './app/user/login.component.html'
})
export class LoginComponent {
    errorMessage: string;
    pageTitle = 'Log In';

    constructor(private router:Router,private authService: AuthService) { }

    login(loginForm: NgForm) {
        if (loginForm && loginForm.valid) {
            let userName = loginForm.form.value.userName;
            let password = loginForm.form.value.password;
            this.authService.login(userName, password);
            this.router.navigate(['/products']);

            // Navigate to the Product List page after log in.
        } else {
            this.errorMessage = 'Please enter a user name and password.';
        };
    }
}
