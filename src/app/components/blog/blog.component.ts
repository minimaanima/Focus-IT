import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticleList } from '../../models/articles-list.model';
import { BlogService } from '../../services/blog/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  articles: Observable<ArticleList[]>;

  constructor(
    private blogService: BlogService
  ) { }

  ngOnInit() {
    this.articles = this.blogService
    .getAllArticles();
  }

}
