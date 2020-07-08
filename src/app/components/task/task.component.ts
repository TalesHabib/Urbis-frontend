import { Component, OnInit } from '@angular/core';
import { TaskModel } from './models/task.model';
import { RemoveTaskDialogService } from './dialogs/remove-task-dialog/services/remove-task-dialog.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  listTask: TaskModel [] = [{
    id: 1,
    description: "Tarefa 1"
  },
  {
    id: 2,
    description: "Tarefa 2"
  },
  {
    id: 3,
    description: "Tarefa 3"
  }
]
  constructor(private removeTaskDialogService: RemoveTaskDialogService) { }

  ngOnInit(): void {
  }
  openRemoveDialog(id: number): void {
    this.removeTaskDialogService.openDialog(id);
  }

}
