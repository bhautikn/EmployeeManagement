// inbox.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent {
  showReadTable: boolean = false;
  showUnreadTable: boolean = false;

  readMessages: any[] = [
    { subject: 'Read Message 1', date: '2023-01-01' },
    { subject: 'Read Message 2', date: '2023-01-02' },
    // Add more read messages as needed
  ];

  unreadMessages: any[] = [
    { subject: 'Unread Message 1', date: '2023-01-03' },
    { subject: 'Unread Message 2', date: '2023-01-04' },
    // Add more unread messages as needed
  ];

  onReadClick() {
    this.showReadTable = true;
    this.showUnreadTable = false;
  }

  onUnreadClick() {
    this.showReadTable = false;
    this.showUnreadTable = true;
  }
}
