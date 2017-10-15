import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { ScheduleModule } from 'primeng/primeng';
import { DialogModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/primeng';
import { CheckboxModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { CalendarModule } from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MenuItem } from 'primeng/primeng';            //api
import { SchedulerComponent } from './scheduler.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ScheduleModule,
    DialogModule,
    InputTextModule,
    CheckboxModule,
    ButtonModule,
    CalendarModule,
    BrowserAnimationsModule
  ],
  declarations: [SchedulerComponent],
  exports: [SchedulerComponent]
})
export class SchedulerModule { }
