import { Injectable } from '@angular/core';

@Injectable()
export class ShowButtonService {
  constructor() {}

  showDate() {
   return new Date();
  }
}
