import { ElementRef, HostListener, Injectable, QueryList, ViewChildren } from '@angular/core';
import { ScrollHeightElements, StartScrollHeightEnums, TravelDistanceEnums, TravelSpeedEnums } from 'src/app/models/scrollheight.model';

@Injectable({
  providedIn: 'root'
})
export class ScrollElementService {

  scrollHeight: number;
  height: number;
  scollPassedPoint: boolean = false;
  scrollElementMap: ScrollHeightElements[] = [];

  constructor() { }

  getScrollHeights(scrollHeight: number, scrollElementMap: ScrollHeightElements[]) {
    scrollElementMap.forEach(element => {
      if (element.startScrollHeight < scrollHeight) {
        element.marginBottom = (scrollHeight - element.startScrollHeight) * element.rateOfChange;
        this.height = element.marginBottom;
        element.nativeElement.style =  `margin-bottom:${this.height}px`;
      }
    });
  }

  createScrollElementArray(scrollElement: QueryList<ElementRef>): ScrollHeightElements[]{
    scrollElement.toArray().forEach((item) => {
      let configArray = item.nativeElement.id.split("-");
      const startScrollHeight: StartScrollHeightEnums = (<any>StartScrollHeightEnums)[configArray[0]];
      const travelDistance: TravelDistanceEnums = (<any>TravelDistanceEnums)[configArray[1]];
      const travelSpeed: TravelSpeedEnums = (<any>TravelSpeedEnums)[configArray[2]];
      this.scrollElementMap.push({
        nativeElement: item.nativeElement,
        scrollTop: item.nativeElement.scrollHeight,
        startScrollHeight: startScrollHeight,
        travelDistance: travelDistance,
        rateOfChange: travelSpeed,
        marginBottom: 0
      })
    });
    return this.scrollElementMap;
  }
}
