import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { StatusComponent } from './components/status/status.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { CreateArticleComponent } from './components/create-article/create-article.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { BlogEditComponent } from './components/blog-edit/blog-edit.component';

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
    StatusComponent,
    QuestionsComponent,
    CreateArticleComponent,
    BlogDetailsComponent,
    BlogEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
