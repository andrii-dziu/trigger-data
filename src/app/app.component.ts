import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ShowButtonService } from './show-button.service';

@Component({
  selector: 'app-root',
  template: `<button (click)="onClick()">Show date</button>
    <h1 *ngIf="show">{{ date }}</h1>`,
  providers: [ShowButtonService],
})
export class AppComponent implements OnInit {
  constructor(private service: ShowButtonService) {}

  // WITHOUT SERVICE
  // show: boolean = false;
  // date: any = new Date();
  // onClick() {
  // this.show = !this.show;
  // }

  ///WITH SERVICE
  date: any;
  show: boolean = false;
  ngOnInit(): void {
    this.date = this.service.showDate();
  }
  onClick() {
    this.show = !this.show;
  }
}
