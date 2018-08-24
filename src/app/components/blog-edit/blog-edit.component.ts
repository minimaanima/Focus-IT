import { Component, OnInit } from '@angular/core';
import { ArticleCreate } from '../../models/articles-create.model';
import { BlogService } from '../../services/blog/blog.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {
  id: string;
  bindingModel: ArticleCreate
  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.blogService.getById(this.id)
    .subscribe(data => {
      this.bindingModel = data;
    })
  }

  edit() {
    const body = {
      [this.id]: this.bindingModel
    }
    this.blogService.editArticle(body)
    .subscribe(data=> {
      this.toastr.success('Article edited !', 'Success!');
      this.router.navigate(['about/blog']);
    })
  }
}
