import { Component } from '@angular/core';

import { AuthService } from './user/auth.service';

import {Router} from '@angular/router';

@Component({
    selector: 'pm-app',
    templateUrl: './app/app.component.html'
})
export class AppComponent {
    pageTitle: string = 'Acme Product Management';

    constructor(private router: Router,private authService: AuthService) { }

    logOut(): void {
        this.authService.logout();
        this.router.navigate(['/welcome']);
        console.log('Log out');
    }
}
