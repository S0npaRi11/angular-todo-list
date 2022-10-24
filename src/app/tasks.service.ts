import { Injectable } from '@angular/core';
// import { findIndex } from 'rxjs';
import { ITask } from './Interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private storageName = 'angular-todo-list'
  constructor() { }

  private generateTaskID() {
    return Math.floor((Math.random() * 100000) + 1)
  }

  getAllTasks() {
    const tasks: Array<ITask> = JSON.parse(localStorage.getItem(this.storageName)!)
    if (tasks !== null) return tasks
    else return []
  }

  getOneTask(id: number) {
    const tasks: ITask[] = this.getAllTasks()
    const result = {
      body: tasks.find(o => o.id === id),
      index: tasks.findIndex(o => o.id === id)
    }

    return result
  }

  private saveTasks(tasks: ITask[]) {
    localStorage.setItem(this.storageName, JSON.stringify(tasks))
  }

  createTask(taskBody: any) {
    const task: ITask = {
      id: this.generateTaskID(),
      title: taskBody.title,
      body: taskBody.body,
      priority: (taskBody.priority),
      isCompleted: false,
      date: new Date()
    }

    const tasks = this.getAllTasks()
    tasks.push(task)

    this.saveTasks(tasks)
  }


  completeTask(id: number) {
    const tasks = this.getAllTasks()
    tasks.forEach(t => {
      if (t.id === id) t.isCompleted = !t.isCompleted
    })

    this.saveTasks(tasks)
  }

  deleteTask(id: number) {
    const tasks = this.getAllTasks()
    const taskIndex = tasks.findIndex(o => o.id === id)
    tasks.splice(taskIndex, 1)

    this.saveTasks(tasks)
  }
}
