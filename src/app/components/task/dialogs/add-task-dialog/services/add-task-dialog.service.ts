import { Injectable } from "@angular/core";
import { MatDialog, MatDialogConfig } from '@angular/material/dialog'
import { AddTaskDialogComponent } from '../add-task-dialog.component';

@Injectable()
export class AddTaskDialogService {
  constructor(private matDialog: MatDialog) { }

  openDialog(): void {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = false;
      dialogConfig.autoFocus = false;
      dialogConfig.height = 'auto';
      dialogConfig.width = '500px';
      dialogConfig.maxWidth = '500px';
      dialogConfig.id = 'addTaskDialogId';

      this.matDialog.open(AddTaskDialogComponent, dialogConfig);
}
}
