import { Component, OnInit } from '@angular/core';
import { ITask } from '../Interfaces/task';
import { TasksService } from '../tasks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public tasks: ITask[] = []

  constructor(private _tasksService: TasksService, private _router: Router) { }

  ngOnInit(): void {
    this.getTasks()
    // console.log(this.tasks)
  }

  getTasks() {
    this.tasks = this._tasksService.getAllTasks()
  }

  // addTask(input: HTMLInputElement) {
  //   this._tasksService.createTask(input.value, 0)
  //   input.value = ''
  //   this.getTasks()
  // }

  markTaskCompleted(id: number | undefined) {
    if (id) {
      this._tasksService.completeTask(id)
      this.getTasks()
    } else {
      alert('id not defined')
    }
  }

  deleteTask(id: number | undefined) {
    if (id) {
      this._tasksService.deleteTask(id)
      this.getTasks()
    } else {
      alert('id not defined')
    }
  }

  navigateToAdd() {
    this._router.navigate(['new'])
  }
}
