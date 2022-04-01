import { Component, ElementRef, HostListener, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ScrollHeightElements } from 'src/app/models/scrollheight.model';
import { ScrollElementService } from 'src/app/shared/shared-services/scroll-element.service';

@Component({
  selector: 'app-about-home',
  templateUrl: './about-home.component.html',
  styleUrls: ['./about-home.component.scss']
})
export class AboutHomeComponent implements OnInit {

  scrollHeight:number;
  isMobile:boolean = false;
  scrollElementMap: ScrollHeightElements[] = [];

  constructor(private scrollElementService: ScrollElementService) { }

  @ViewChildren('scrollElement') scrollElement: QueryList<ElementRef>;

  @HostListener('window:ScrollTopHeight',['$event']) onScrollEvent(event):void {
    this.scrollHeight = event.detail;
    this.scrollElementService.getScrollHeights(this.scrollHeight, this.scrollElementMap);
  }

  @HostListener('window:resize',['$event']) onResizeEvent(event):void {
    this.isMobile = (window.innerWidth < 549) ? true : false;
  }

  ngOnInit(): void {
    if(window.innerWidth < 549) {
      this.isMobile = true;
    }
  }

  ngAfterViewInit(): void {
    this.scrollElementMap = this.scrollElementService.createScrollElementArray(this.scrollElement);
    this.scrollHeight = this.scrollElementService.scrollHeight;
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
