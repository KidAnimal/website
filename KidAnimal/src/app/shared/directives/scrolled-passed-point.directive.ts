import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appScrolledPassedPoint]'
})
export class ScrolledPassedPointDirective {

  numToPass: number = 0;
  scrollHeight: number;
  scrollPassedPoint: boolean = false;

  @HostListener('window:ScrollTopHeight', ['$event']) onScrollEvent(event): void {
    this.scrollHeight = event.detail;
    if (this.scrollHeight > this.numToPass) {
      this.scrollPassedPoint = true
    }
  }

  constructor() { }

}
