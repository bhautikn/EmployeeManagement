// leave-form.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-leave-form',
  templateUrl: './leave-form.component.html',
  styleUrls: ['./leave-form.component.css']
})
export class LeaveFormComponent {
  leaveApplication: any = {}; // Initialize with empty object

  // You can add additional logic here if needed
  submitForm() {
    // Handle form submission logic
    console.log();
  }
  cancelleave() {
    // Handle form submission logic
    console.log();
  }  
}
