import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { student } from 'src/app/pages/Student/index/index.component';

@Component({
  selector: 'app-create-dialog',
  templateUrl: './create-dialog.component.html',
  styleUrls: ['./create-dialog.component.scss']
})
export class CreateDialogComponent {

  nameControl = new FormControl(this.data.name, [
    Validators.required,
    Validators.minLength(3),
  ]);

  lastNameControl = new FormControl(this.data.lastName, [
    Validators.required,
    Validators.minLength(3),
  ]);

  emailControl = new FormControl(this.data.email, [Validators.required, Validators.email]);

  studentForm = new FormGroup({
    name: this.nameControl,
    lastName: this.lastNameControl,
    email: this.emailControl
  });

  constructor(
    public dialogRef: MatDialogRef<CreateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: student
  ){}

  save(): void{
    if (this.studentForm.valid) {
      this.dialogRef.close(this.studentForm.value)
    } else {
      this.studentForm.markAllAsTouched();
    }
  }
}
