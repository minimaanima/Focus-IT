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
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthGuard } from './auth/auth.guard';
import { CreateArticleComponent } from './components/create-article/create-article.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';

const routes: Route[] = [
  {path: '' , pathMatch: 'full', component: HomeComponent},
  {path: 'price-and-services' , component: PriceAndServicesComponent},
  {path: 'article-create' , component: CreateArticleComponent,canActivate: [AuthGuard] },
  {path: 'coverage' , component: CoverageComponent},
  {path: 'network' , component: NetworkComponent},
  {path: 'about',children: [
    {path: '' , component: AboutComponent},
    {path: 'blog' , component: BlogComponent},
    {path: 'blog/:id' , component: BlogDetailsComponent},
  {path: 'contacts' , component: ContactsComponent}
  ]},
  {path: 'status' , component: StatusComponent, canActivate: [AuthGuard] },
  { path: 'auth', children:[
    {path: 'signin', component: SigninComponent},
    {path: 'signup', component: SignupComponent},
  ]}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }