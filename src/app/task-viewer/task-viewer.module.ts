import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskViewerComponent } from './task-viewer.component';

import { FormsModule } from '@angular/forms';

import { DataTableModule } from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule, Response } from '@angular/http';
import { MenuItem } from 'primeng/primeng';            //api
import { HttpClientModule } from "@angular/common/http";
import {DropdownModule} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    DataTableModule,
    HttpClientModule,
    DropdownModule
  ],
  declarations: [TaskViewerComponent],
  exports: [TaskViewerComponent]
})
export class TaskViewerModule { }
