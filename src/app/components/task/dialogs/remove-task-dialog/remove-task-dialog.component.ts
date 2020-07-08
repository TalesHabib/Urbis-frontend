import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'

@Component({
  selector: 'app-remove-task-dialog',
  templateUrl: './remove-task-dialog.component.html',
  styleUrls: ['./remove-task-dialog.component.scss']
})
export class RemoveTaskDialogComponent implements OnInit {

  constructor(private _dialogRef: MatDialogRef<RemoveTaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private readonly id: number) { }

  ngOnInit(): void {
    console.log(this.id)
  }

  close(): void {
    this._dialogRef.close()
  }

  remove(): void {

  }

}
