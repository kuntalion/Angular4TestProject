import { Component, OnInit } from '@angular/core';
import { tasks } from './task-viewer.data';

@Component({
  selector: 'app-task-viewer',
  templateUrl: './task-viewer.component.html',
  styleUrls: ['./task-viewer.component.css']
})
export class TaskViewerComponent implements OnInit {

  msgs: any[];

  tasks: any[];

  selectedCars: any[];

  constructor() { }

  ngOnInit() {
    // this.carService.getCarsSmall().then(cars => this.cars = cars);
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
