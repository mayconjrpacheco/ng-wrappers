import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Day } from './model';
import { InputDateWrapperController } from './controller';

@Component({
  selector: 'input-date-wrapper',
  template: `
    <div class="InputDateWrapper">
      <ng-content></ng-content>
      <button (click)="toggleCalendar()">Calendar</button>
      <div *ngIf="showCalendar" class="InputDateWrapper__calendar">
        <div class="InputDateWrapper__calendar__days">
          <span class="InputDateWrapper__calendar__days__unit" *ngFor="let day of days; let i = index">
            {{ day.day }}
          </span>
        </div>
      </div>
    </div>
  `
})
export class InputDateWrapperComponent implements OnInit {

  public showCalendar: boolean = false;
  public days: Array<Day> = [];

  constructor(private controller: InputDateWrapperController) {}

  ngOnInit() {
    let currentDate = `${moment().year()}-${moment().month()+1}`
    let i: number = 1;

    while(i <= moment(currentDate, 'YYYY-MM').daysInMonth()) {
      this.days.push({
        day: i,
        month: moment().month()+1,
        year: moment().year()
      });
      console.log(moment(currentDate, 'YYYY-MM').daysInMonth());
      i++;
    }
    console.log(moment(currentDate, 'YYYY-MM').daysInMonth());
  }

  public toggleCalendar(): void {
    this.showCalendar = !this.showCalendar;
  }
}
