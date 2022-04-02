import { AfterViewInit, Component, ElementRef, HostListener, Input, OnInit, QueryList, ViewChildren } from '@angular/core';

// MODELS
import { ScrollHeightElements, StartScrollHeightEnums, TravelDistanceEnums, TravelSpeedEnums } from 'src/app/models/scrollheight.model';
import { ScrollElementService } from 'src/app/shared/shared-services/scroll-element.service';

@Component({
  selector: 'app-hero-home',
  templateUrl: './hero-home.component.html',
  styleUrls: ['./hero-home.component.scss']
})
export class HeroHomeComponent implements OnInit, AfterViewInit {

  @Input() scrollDirection: string = "none";
  scrollHeight: number;
  scrollElementMap: ScrollHeightElements[] = [];
  scrollPassedPoint: boolean = false;

  @ViewChildren('scrollElement') scrollElement: QueryList<ElementRef>;

  @HostListener('window:ScrollTopHeight', ['$event']) onScrollEvent(event): void {
    this.scrollHeight = event.detail;
    if (this.scrollHeight > 100) {
      this.scrollPassedPoint = true
    }
    this.scrollElementService.getScrollHeights(this.scrollDirection, this.scrollHeight, this.scrollElementMap);
  }

  constructor(private scrollElementService: ScrollElementService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.scrollElementMap = this.scrollElementService.createScrollElementArray(this.scrollElement);
    this.scrollHeight = this.scrollElementService.scrollHeight;
  }
}
