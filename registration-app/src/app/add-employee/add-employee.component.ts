import { Component } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {
  employee: any = {}; // Initialize with empty object

  onImageUpload(event: any) {
    // Handle image upload logic
}
submitForm() {
  // Handle form submission logic
  console.log(this.employee);
}
cancleForm() {
  // Handle form submission logic
  console.log(this.employee);
}
}