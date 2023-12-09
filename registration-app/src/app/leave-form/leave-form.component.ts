// leave-form.component.ts

import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-leave-form',
  templateUrl: './leave-form.component.html',
  styleUrls: ['./leave-form.component.css']
})
export class LeaveFormComponent {

  leaveForm:any = new FormGroup({
    typeOfLeave:new FormControl('', Validators.required),
    reason: new FormControl('', Validators.required),
    days: new FormControl('', Validators.required),
    startDate: new FormControl('', Validators.required),
    endDate: new FormControl('', Validators.required),
  })
  result: string = '';

  // constructor(private fb: FormBuilder) {
  //   this.leaveForm = this.fb.group({
  //     reason: ['', Validators.required],
  //     days: [1, [Validators.required, Validators.min(1)]],
  //     startDate: ['', Validators.required],
  //     endDate: ['', Validators.required],
  //   });
  // }

  submitForm() {
    console.log(this.leaveForm.value)
  }
  cancelleave() {
    // Handle form submission logic
    console.log();
  }  
}
