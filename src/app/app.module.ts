import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
// import { ScheduleModule } from 'primeng/primeng';
// import { DialogModule } from 'primeng/primeng';
// import { InputTextModule } from 'primeng/primeng';
// import { CheckboxModule } from 'primeng/primeng';
// import { ButtonModule } from 'primeng/primeng';
// import { CalendarModule } from 'primeng/primeng';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { MenuItem } from 'primeng/primeng';            //api

import { SchedulerModule } from './scheduler/scheduler.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SchedulerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
