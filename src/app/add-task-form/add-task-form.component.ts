import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.scss']
})
export class AddTaskFormComponent implements OnInit {

  taskFormMessage: string = ''
  isTaskCreationSuccessful = true
  taskMessageStyles = {
    'text-red': !this.isTaskCreationSuccessful,
    'text-green': this.isTaskCreationSuccessful
  }
  constructor(private _taskService: TasksService, private _router: Router) { }

  ngOnInit(): void {
  }

  addNewTask(task: any) {
    this._taskService.createTask(task)
    this.taskFormMessage = 'Task created successfully'
    this.clearTaskMessage(2500)
  }

  private clearTaskMessage(time: number) {
    setTimeout(() => {
      this.taskFormMessage = ''
    }, time)
  }

  goToHome() {
    this._router.navigate([''])
  }

}
