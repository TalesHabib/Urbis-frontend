import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-task-dialog',
  templateUrl: './add-task-dialog.component.html',
  styleUrls: ['./add-task-dialog.component.sass']
})
export class AddTaskDialogComponent implements OnInit {
  form: FormGroup
  constructor(private _dialogRef: MatDialogRef<AddTaskDialogComponent>, private formbuilder: FormBuilder ) { }

  ngOnInit(): void {
    this.buildForm()
  }

  submitForm(): void {

  }

  private buildForm() :void {
    this.form = this.formbuilder.group({
      description: ["", [Validators.required]],
    })
  }
}
