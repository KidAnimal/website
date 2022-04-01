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
      // Set the Initial Bottom of the element to match what it is by default
      let elementFromBtm = window.innerHeight - element.offsetTop + element.offsetHeight;
      // Check if you have scrolled within range of where you want animation to start
      if (scrollHeight > element.offsetTop - element.startScrollHeight) {
        // Check if the element is above the first screen area
        // If it is set the starting height and then do the calulation for travel distance
        if (element.offsetTop < element.offsetTop + element.offsetHeight) {
          element.bottom = elementFromBtm;
          element.bottom -= ((scrollHeight - (element.startScrollHeight - element.offsetTop)) * element.rateOfChange);
          element.nativeElement.style =  `top:${element.bottom}px`;
        }
        else{
        element.bottom = window.innerHeight - element.offsetTop + element.offsetHeight;
        element.bottom += ((scrollHeight - (element.offsetTop - element.startScrollHeight)) * element.rateOfChange);
        element.nativeElement.style =  `bottom:${element.bottom}px`;
      //     console.log("bottom2: ", element.bottom);
      //     console.log("offset2: ", element.offsetTop);
      //     console.log("scrollHeight2: ", scrollHeight);
      //     console.log("startScroll2", element.startScrollHeight);
      //     console.log("rateOfChange2", element.rateOfChange);
      //   }
      //   // Set the bottom equal to the distance between the bottom of the element
      //   // and the bottom of the page
      //   // and then I need to bottom calculation to that number
        }
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
        offsetTop: item.nativeElement.offsetTop,
        offsetHeight: item.nativeElement.offsetHeight,
        bottom: 0
      })
    });
    return this.scrollElementMap;
  }
}
