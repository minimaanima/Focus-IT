import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageList } from '../../models/message-list.model'
import { MessageService } from '../../services/messages/message.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  messages: Observable<MessageList[]>

  constructor(
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.messages = this.messageService
    .getMessages()
  }

}
