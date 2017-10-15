import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskViewerComponent } from './task-viewer.component';

import { FormsModule } from '@angular/forms';

import { DataTableModule } from 'primeng/primeng';
// import { DialogModule } from 'primeng/primeng';
// import { InputTextModule } from 'primeng/primeng';
// import { CheckboxModule } from 'primeng/primeng';
// import { ButtonModule } from 'primeng/primeng';
// import { CalendarModule } from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MenuItem } from 'primeng/primeng';            //api

@NgModule({
  imports: [
    CommonModule,
    DataTableModule
  ],
  declarations: [TaskViewerComponent],
  exports: [TaskViewerComponent]
})
export class TaskViewerModule { }
