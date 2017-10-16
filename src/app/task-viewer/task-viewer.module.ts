import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskViewerComponent } from './task-viewer.component';

import { FormsModule } from '@angular/forms';

import { DataTableModule } from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule, Response } from '@angular/http';
import { MenuItem } from 'primeng/primeng';            //api

@NgModule({
  imports: [
    CommonModule,
    DataTableModule,
    HttpModule
  ],
  declarations: [TaskViewerComponent],
  exports: [TaskViewerComponent]
})
export class TaskViewerModule { }
