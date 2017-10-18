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
  frequency: any[];

  selectedCars: any[];

  ngOnInit() {
    this.taskViewerService.getTasks().subscribe(tasks  => 
      this.tasks = tasks
    );
    this.frequency = [];
    this.frequency.push({label: 'All', value: null});
    this.frequency.push({label: 'Minutely', value: 0});
    this.frequency.push({label: 'Hourly', value: '1'});
    this.frequency.push({label: 'Daily', value: '2'});
    this.frequency.push({label: 'Weekly', value: '3'});
    this.frequency.push({label: 'Monthly', value: '4'});
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
