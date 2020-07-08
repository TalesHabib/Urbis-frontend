import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RemoveTaskDialogComponent } from './remove-task-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { RemoveTaskDialogService } from './services/remove-task-dialog.service';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [RemoveTaskDialogComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  entryComponents: [RemoveTaskDialogComponent],
  providers: [RemoveTaskDialogService]
})
export class RemoveTaskDialogModule { }
