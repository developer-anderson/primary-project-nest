import { Injectable } from '@nestjs/common';
import { Task } from './task';

@Injectable()
export class TaskService {
  tasks: Task[] = [
    { id: 1, description: 'alguma coisa 1', status: true },
    { id: 2, description: 'alguma coisa 2', status: false },
    { id: 3, description: 'alguma coisa 3', status: true },
    { id: 4, description: 'alguma coisa 4', status: false },
    { id: 5, description: 'alguma coisa 555', status: false },
    { id: 6, description: 'alguma coisa 166', status: true },
    { id: 7, description: 'alguma coisa 177', status: false },
    { id: 8, description: 'alguma coisa 188', status: true },
  ];
  getAll() {
    return this.tasks;
  }
  getById(id: number){

  }
  creat(task: Task){

  }
}
