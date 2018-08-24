import { Component, OnInit } from '@angular/core';
import { ArticleList } from '../../models/articles-list.model';
import { BlogService } from '../../services/blog/blog.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {
  article: ArticleList;
  id: string;
  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.blogService.getById(this.id).subscribe(data => {
      this.article=data;
    })
  }
  delete() {
    this.blogService.deleteArticle(this.id).subscribe(data => {
      console.log(data)
      this.toastr.success('Article Deleted !', 'Success')
      this.router.navigate(['/about/blog'])
    })
  }

}
