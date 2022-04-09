import { ElementRef, HostListener, Injectable, Input, QueryList, ViewChildren } from '@angular/core';
import { ScrollHeightElements, StartScrollHeightEnums, TravelDistanceEnums, TravelSpeedEnums } from 'src/app/models/scrollheight.model';

@Injectable({
  providedIn: 'root'
})
export class ScrollElementService {

  scrollDirection: string = "none";
  scrollHeight: number;
  previousScrollHeight: number;
  height: number;
  scollPassedPoint: boolean = false;
  scrollElementMap: ScrollHeightElements[] = [];

  screenWidth: number;
  screenHeight: number;

  @HostListener('window:resize', ['$event'])
    onResize(event?) {
      this.screenHeight = window.innerHeight;
      this.screenWidth = window.innerWidth;
    }

  constructor() { }

  getScrollHeights(scrollDirection: string, scrollHeight: number, scrollElementMap: ScrollHeightElements[]): void {
    scrollElementMap.forEach(element => {
      // Theres something here... 
      // We need to basically get the movement bounds 
      // Then make it so that when in that range it can move based on the 
      // Position of that thing

      if (scrollDirection === "Up" && scrollHeight > element.initialBottom) {
        element.bottom += element.rateOfChange;
        // element.bottom -= element.rateOfChange * element.currentScrollPosition;
        // element.bottom -= element.currentScrollPosition * element.rateOfChange;
      }
      if (scrollDirection === "Down" && scrollHeight < element.startScrollHeight) {
        console.log("scrollHeight", scrollHeight);
        element.bottom -= element.rateOfChange;
        // element.bottom += element.rateOfChange * element.currentScrollPosition;
        // element.bottom -= element.currentScrollPosition * element.rateOfChange;
      }
      element.nativeElement.style =  `top:${element.bottom}px`;
    });
  }

  createScrollElementArray(scrollElement: QueryList<ElementRef>): ScrollHeightElements[]{
    scrollElement.toArray().forEach((item) => {
      const result = item.nativeElement.getBoundingClientRect();
      let configArray = item.nativeElement.id.split("-");
      const startScrollHeight: StartScrollHeightEnums = (<any>StartScrollHeightEnums)[configArray[0]];
      const travelDistance: TravelDistanceEnums = (<any>TravelDistanceEnums)[configArray[1]];
      const travelSpeed: TravelSpeedEnums = (<any>TravelSpeedEnums)[configArray[2]];
      this.scrollElementMap.push({
        nativeElement: item.nativeElement,
        scrollTop: Math.floor(result.top),
        startScrollHeight: Math.floor(result.top) - startScrollHeight,
        travelDistance: travelDistance,
        rateOfChange: travelSpeed,
        currentScrollPosition: 1,
        bottom: (Math.floor(result.top)),
        initialBottom: (Math.floor(result.top))
      })
    });
    return this.scrollElementMap;
  }
}
