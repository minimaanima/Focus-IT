import { Component, OnInit } from '@angular/core';
import { ArticleCreate } from '../../models/articles-create.model';
import { BlogService } from '../../services/blog/blog.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {
  bindingModel: ArticleCreate;
  constructor(
    private blogService: BlogService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.bindingModel = new ArticleCreate('','','')
  }

  ngOnInit() {
  }
  create() {
    this.blogService.createArticle(this.bindingModel)
    .subscribe(data => {
      this.toastr.success('Article created !', 'Success');
      this.router.navigate(['/about/blog'])
    })
  }

}
