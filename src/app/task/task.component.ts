import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITask } from '../Interfaces/task'

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input('task') public task: ITask | undefined
  @Output() public taskID = new EventEmitter()
  @Output() public taskToDelete = new EventEmitter()
  constructor() { }

  ngOnInit(): void { }

  taskBorderClass() {
    if (this.task) {
      if (this.task.isCompleted) return 'task-complete'
      switch (this.task.priority) {
        case "0": return 'priority-low'
        case "1": return 'priority-medium'
        case "2": return 'priority-high'
      }
    } else {
      return 'hide'
    }
  }

  sendIdWithEvent(id: number | undefined) {
    if (id) this.taskID.emit(id)
  }

  sendIdToDelete(id: number | undefined) {
    if (id) this.taskToDelete.emit(id)
  }

}
