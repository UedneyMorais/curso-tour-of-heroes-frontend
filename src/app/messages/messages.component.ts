import { Component, OnInit } from '@angular/core';
import { MessageService } from '../service/message/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent {
  constructor(public messaService: MessageService){}
}
