import { AfterViewInit, Component, ElementRef, HostListener, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ScrollHeightElements } from 'src/app/models/scrollheight.model';
import { ScrollElementService } from 'src/app/shared/shared-services/scroll-element.service';

@Component({
  selector: 'app-portfolio-home',
  templateUrl: './portfolio-home.component.html',
  styleUrls: ['./portfolio-home.component.scss']
})
export class PortfolioHomeComponent implements OnInit, AfterViewInit {

  isVisible = '';
  scrollHeight:number;
  scrollElementMap: ScrollHeightElements[] = [];

  constructor(private scrollElementService: ScrollElementService) { }

  @ViewChildren('scrollElement') scrollElement: QueryList<ElementRef>;

  @HostListener('window:ScrollTopHeight',['$event']) onScrollEvent(event):void {
    this.scrollHeight = event.detail;
    this.scrollElementService.getScrollHeights(this.scrollHeight, this.scrollElementMap);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.scrollElementMap = this.scrollElementService.createScrollElementArray(this.scrollElement);
  }

  onSelected(selection:string):string {
    if (selection !== "" && this.isVisible === selection) {
      return this.isVisible = "";
    }
    this.isVisible = selection;
    return this.isVisible;
  }

  saveScrollHeight() {
    sessionStorage.setItem('home-scroll-height', this.scrollHeight.toString());
  }

}
