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

  getScrollHeights(scrollDirection: string, scrollHeight:number, scrollElementMap: ScrollHeightElements[]) {
    scrollElementMap.forEach(element => {
      if (scrollHeight > element.scrollTop - element.startScrollHeight) {
        if (scrollDirection === "Up" && scrollHeight) {
          console.log((element.bottom + element.rateOfChange));
          element.bottom += element.rateOfChange;
        }
        if (scrollDirection === "Down") {
          element.bottom -= element.rateOfChange;
        }
        element.nativeElement.style =  `top:${element.bottom}px`;
      };
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
        scrollTop: result.top,
        startScrollHeight: startScrollHeight,
        travelDistance: travelDistance,
        rateOfChange: travelSpeed,
        offsetTop: item.nativeElement.offsetTop,
        offsetHeight: item.nativeElement.offsetHeight,
        bottom: result.top
      })
    });
    return this.scrollElementMap;
  }
}
