import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ArticleList } from '../../models/articles-list.model';
import { ArticleCreate } from '../../models/articles-create.model';

const baseUrl = 'https://focus-33a95.firebaseio.com/articles';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  constructor(private http: HttpClient) { }

  getAllArticles() {
    return this.http.get(`${baseUrl}.json`)
    .pipe(map((res: Response) => {
      const ids = Object.keys(res);
      const articles: ArticleList[] = [];
      for (const id of ids) {
        articles.push(new ArticleList(id, res[id].name, res[id].imagePath, res[id].description));
      }
      return articles;
    }));
  }
  createArticle(body: ArticleCreate) {
    return this.http.post(`${baseUrl}.json`, body)
  }
}
