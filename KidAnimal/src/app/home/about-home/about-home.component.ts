import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-home',
  templateUrl: './about-home.component.html',
  styleUrls: ['./about-home.component.scss']
})
export class AboutHomeComponent implements OnInit {

  scrollHeight:number;
  isMobile:boolean = false;

  constructor() { }

  @HostListener('window:ScrollTopHeight',['$event']) onScrollEvent(event):void {
    this.scrollHeight = event.detail;
  }

  @HostListener('window:resize',['$event']) onResizeEvent(event):void {
    this.isMobile = (window.innerWidth < 549) ? true : false;
  }

  ngOnInit(): void {
    if(window.innerWidth < 549) {
      this.isMobile = true;
    }
  }

  // titleStyle(value:number, additionalMargin:number, mobileMargin:number) {
  //   if(window.innerWidth < 549 && mobileMargin > 0) {
  //     return {
  //       marginTop: `${(this.scrollHeight * - value) + mobileMargin}px`
  //     }
  //   }

  //   return {
  //     marginTop: `${(this.scrollHeight * - value) + additionalMargin}px`
  //   }
  // }

}
