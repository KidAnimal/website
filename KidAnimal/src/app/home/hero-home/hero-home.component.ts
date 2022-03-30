import { AfterViewInit, Component, ElementRef, HostListener, OnInit, QueryList, ViewChildren } from '@angular/core';

// MODELS
import { ScrollHeightElements, TravelDistanceEnums, TravelSpeedEnums } from 'src/app/models/scrollheight.model';

@Component({
  selector: 'app-hero-home',
  templateUrl: './hero-home.component.html',
  styleUrls: ['./hero-home.component.scss']
})
export class HeroHomeComponent implements OnInit, AfterViewInit {

  scrollHeight: number;
  height: number;
  scollPassedPoint: boolean = false;
  scrollElementMap: ScrollHeightElements[] = [];

  constructor() { }

  @ViewChildren('scrollElement') scrollElement: QueryList<ElementRef>;

  @HostListener('window:ScrollTopHeight', ['$event']) onScrollEvent(event): void {
    this.scrollHeight = event.detail;
    if (this.scrollHeight > 100) {
      this.scollPassedPoint = true
    }
    this.getScrollHeights();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.createScrollElementArray();
  }

  getScrollHeights() {
    this.scrollElementMap.forEach(element => {
        if (element.travelDistance >= this.scrollHeight) {
          this.scrollElement.toArray().forEach((item) => {
            let calc = this.scrollHeight + element.rateOfChange;
            console.log(calc);
            this.scrollHeight > 0 ? this.height = this.scrollHeight + element.rateOfChange : this.height = this.scrollHeight;
            item.nativeElement.style =  `margin-bottom:${this.height}px`;
        });
      }
    });
  }

  createScrollElementArray() {
    this.scrollElement.toArray().forEach((item) => {
      let configArray = item.nativeElement.id.split("-");
      const travelDistance: TravelDistanceEnums = (<any>TravelDistanceEnums)[configArray[0]];
      const travelSpeed: TravelSpeedEnums = (<any>TravelSpeedEnums)[configArray[1]];
      this.scrollElementMap.push({
        nativeElement: item.nativeElement,
        scrollTop: item.nativeElement.scrollHeight,
        travelDistance: travelDistance,
        rateOfChange: travelSpeed
      })
    });
  }
}
