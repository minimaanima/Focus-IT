import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

const baseUrl = 'https://focus-33a95.firebaseio.com/articles';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  constructor(private http: HttpClient) { }

  getAllArticles() {
    return this.http.get(`${baseUrl}.json`)
    .pipe(map((res: Response) => {
      console.log(res);
    }));
  }
}
