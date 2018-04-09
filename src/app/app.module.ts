import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { MessageModule } from './messages/message.module';
import { PageNotFoundComponent } from './page-not-found.component';
import { ProductData } from './products/product-data';
/* Feature Modules */
import { ProductModule } from './products/product.module';
import { UserModule } from './user/user.module';
import { LoginComponent } from './user/login.component';
import { ProductListComponent } from './products/product-list.component';

import {AppRoutingModule} from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,    
    InMemoryWebApiModule.forRoot(ProductData, { delay: 1000 }),
    ProductModule,
    UserModule,
    AppRoutingModule,
    MessageModule
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    PageNotFoundComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
