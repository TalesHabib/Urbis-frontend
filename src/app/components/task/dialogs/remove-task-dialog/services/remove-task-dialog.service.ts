import { Injectable } from "@angular/core";
import { MatDialog, MatDialogConfig } from '@angular/material/dialog'
import { RemoveTaskDialogComponent } from '../remove-task-dialog.component';

@Injectable()
export class RemoveTaskDialogService {
  constructor(private matDialog: MatDialog) { }

  openDialog(id: number): void {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = false;
      dialogConfig.autoFocus = false;
      dialogConfig.height = 'auto';
      dialogConfig.width = '300px';
      dialogConfig.maxWidth = '300px';
      dialogConfig.id = 'removeTaskDialogId';
      dialogConfig.data = {id};

      this.matDialog.open(RemoveTaskDialogComponent, dialogConfig);
}
}
