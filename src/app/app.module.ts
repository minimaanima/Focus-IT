import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { PriceAndServicesComponent } from './components/price-and-services/price-and-services.component';
import { AppRoutingModule } from './app-routing.model';
import { CoverageComponent } from './components/coverage/coverage.component';
import { NetworkComponent } from './components/network/network.component';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { StatusComponent } from './components/status/status.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SpinnerComponent,
    PriceAndServicesComponent,
    CoverageComponent,
    NetworkComponent,
    AboutComponent,
    BlogComponent,
    ContactsComponent,
    SigninComponent,
    SignupComponent,
    StatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
