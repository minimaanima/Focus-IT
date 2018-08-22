import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PriceAndServicesComponent } from './components/price-and-services/price-and-services.component';
import { CoverageComponent } from './components/coverage/coverage.component';
import { NetworkComponent } from './components/network/network.component';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { StatusComponent } from './components/status/status.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Route[] = [
  {path: '' , pathMatch: 'full', component: HomeComponent},
  {path: 'price-and-services' , component: PriceAndServicesComponent},
  {path: 'coverage' , component: CoverageComponent},
  {path: 'network' , component: NetworkComponent},
  {path: 'about',children: [
    {path: '' , component: AboutComponent},
    {path: 'blog' , component: BlogComponent},
  {path: 'contacts' , component: ContactsComponent}
  ]},
  {path: 'status' , component: StatusComponent},
  { path: 'auth', children:[
    {path: 'signin', component: SigninComponent},
    {path: 'signup', component: SignupComponent},
  ]},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }