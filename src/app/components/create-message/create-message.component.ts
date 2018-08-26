import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { MessageCreate } from '../../models/message-create.model';
import { MessageService } from '../../services/messages/message.service';

@Component({
  selector: 'app-create-message',
  templateUrl: './create-message.component.html',
  styleUrls: ['./create-message.component.css']
})
export class CreateMessageComponent implements OnInit {
  bindingModel: MessageCreate
  constructor(
    private messageService: MessageService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.bindingModel = new MessageCreate('','')
  }

  ngOnInit() {
  }
  create() {
    this.messageService.createMessage(this.bindingModel)
    .subscribe(data => {
      this.toastr.success('Message created successfully !', 'Success');
      this.router.navigate(['status'])
    })
  }

}
