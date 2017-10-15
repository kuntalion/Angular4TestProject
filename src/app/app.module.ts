import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { SchedulerModule } from './scheduler/scheduler.module';
import { TaskViewerModule } from './task-viewer/task-viewer.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SchedulerModule,
    TaskViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
