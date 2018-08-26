import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { MessageList } from '../../models/message-list.model';
import { MessageCreate } from '../../models/message-create.model';

const baseUrl = 'https://focus-33a95.firebaseio.com/messages';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor(private http: HttpClient) { }

  getMessages() {
    return this.http.get(`${baseUrl}.json`)
    .pipe(map((res: Response) => {
      const ids = Object.keys(res);
      const articles: MessageList[] = [];
      for (const id of ids) {
        articles.push(new MessageList(id, res[id].date, res[id].content));
      }
      return articles;
    }));
  }
  createMessage(body: MessageCreate) {
    return this.http.post(`${baseUrl}.json`, body)
  }
}
