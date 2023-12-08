import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-leave-form',
  templateUrl: './leave-form.component.html',
  styleUrl: './leave-form.component.css'
})
export class LeaveFormComponent {
  leaveForm: FormGroup;
  result: string = '';

  constructor(private fb: FormBuilder) {
    this.leaveForm = this.fb.group({
      reason: ['', Validators.required],
      days: [1, [Validators.required, Validators.min(1)]],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
    });
  }

  calculateLeave() {
    const daysTaken = this.leaveForm.value.days;

    if (daysTaken <= 5) {
      this.result = 'Paid Leave';
    } else {
      this.result = 'Unpaid Leave';
    }
  }
}
