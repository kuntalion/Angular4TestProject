import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Task } from './task-viewer.data';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TaskViewerService {

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>('.../TaskService.svc/gettasks').map(this.extractData);
  }

  private extractData(res: Task[]) {
    res.forEach((d) => {
      d.LastRunDate = new Date(parseInt(d.LastRunDate.substr(6)))
    });
    return res;
  }  
}
