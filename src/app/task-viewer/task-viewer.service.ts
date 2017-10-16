import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Task } from './task-viewer.data';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class TaskViewerService {

  constructor(private http: Http) { }

  getTasks() {
    return this.http.get('/showcase/resources/data/cars-small.json')
      .toPromise()
      .then(res => <Task[]>res.json().data)
      .then(data => { return data; });
  }
}
