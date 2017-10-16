import { Component, OnInit } from '@angular/core';
import { tasks, Task } from './task-viewer.data';
import { TaskViewerService } from './task-viewer.service';

@Component({
  selector: 'app-task-viewer',
  templateUrl: './task-viewer.component.html',
  styleUrls: ['./task-viewer.component.css'],
  providers: [TaskViewerService]
})
export class TaskViewerComponent implements OnInit {

  constructor(private taskViewerService: TaskViewerService) { }

  msgs: any[];

  tasks: Task[];

  selectedCars: any[];

  ngOnInit() {
    // this.carService.getCarsSmall().then(cars => this.cars = cars);
    // this.taskViewerService.getTasks().then(tasks => this.tasks = tasks);
    this.tasks = tasks;
  }

  onRowSelect(event) {
    this.msgs = [];
    this.msgs.push({ severity: 'info', summary: 'Car Selected', detail: event.data.vin + ' - ' + event.data.brand });
  }

  onRowUnselect(event) {
    this.msgs = [];
    this.msgs.push({ severity: 'info', summary: 'Car Unselected', detail: event.data.vin + ' - ' + event.data.brand });
  }
}
