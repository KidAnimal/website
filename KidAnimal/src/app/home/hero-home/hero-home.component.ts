import { AfterViewInit, Component, ElementRef, HostListener, OnInit, QueryList, ViewChildren } from '@angular/core';

// MODELS
import { ScrollHeightElements } from 'src/app/models/scrollheight.model';

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
    this.scrollElement.toArray().forEach((item) => {
      this.scrollElementMap.push({
        nativeElement: item.nativeElement,
        scrollTop: item.nativeElement.scrollHeight,
        startScrollHeight: 0,
        // travelDistance: item.nativeElement.id,
        travelDistance: 400,
        rateOfChange: 4
      })
    });
  }

  getScrollHeights() {
    this.scrollElementMap.forEach(element => {
      // if (element.travelDistance <= this.scrollHeight && element.startScrollHeight >= this.scrollHeight) {
        if (element.travelDistance >= this.scrollHeight) {
          element.scrollTop = this.scrollHeight;
          this.scrollElement.toArray().forEach((item) => {
          this.height = element.scrollTop + element.rateOfChange;
          item.nativeElement.style =  `margin-bottom:${this.height}px`; 
          // if (item.nativeElement === element.nativeElement) {
          //   console.log('item', item.nativeElement);
          // }
        });
      }
    });
  }
}