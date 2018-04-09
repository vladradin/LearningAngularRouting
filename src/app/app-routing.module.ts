import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Imports for loading & configuring the in-memory web api
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';

const mainRoutes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo: "/welcome", pathMatch: "full" },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(mainRoutes, { enableTracing: true }),
  ], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
