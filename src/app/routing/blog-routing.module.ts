import { NgModule } from '@angular/core';
import { Route, RouterModule, Router } from '@angular/router';
import { AboutComponent } from '../components/about/about.component';
import { BlogComponent } from '../components/blog/blog.component';
import { BlogDetailsComponent } from '../components/blog-details/blog-details.component';
import { ContactsComponent } from '../components/contacts/contacts.component';
import { BlogEditComponent } from '../components/blog-edit/blog-edit.component';

const routes: Route[] = [
  {path: '' , component: AboutComponent},
    {path: 'blog' , component: BlogComponent},
    {path: 'blog/:id' , component: BlogDetailsComponent},
    {path: 'blog/edit/:id' , component: BlogEditComponent},
    {path: 'contacts' , component: ContactsComponent}
]

@NgModule({
  imports:[
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class BlogRoutingModule {}
