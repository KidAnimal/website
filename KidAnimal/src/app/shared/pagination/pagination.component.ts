import { Component, HostListener, Input, OnInit } from '@angular/core';
import { ScrollHeight } from 'src/app/models/scrollheight.model';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  
  scrollHeightObj: ScrollHeight = {};
  scrollHeight:number; 
  
  @HostListener('window:ScrollTopHeight',['$event']) onScrollEvent(event):void {
    this.scrollHeight = event.detail; 
  }

  @HostListener('window:KAScrollHeightEvent',['$event']) onScrollHeightsRecieved(event):void { 
    this.scrollHeightObj = event.detail;
    console.log('This worked',this.scrollHeightObj);
  }

  constructor() { }

  ngOnInit(): void {
  }

  scrollToSection(section:string) { 
    let sectionHeight; 

    switch(section) {
      case 'home':
        // sectionHeight = this.scrollHeightObj.homeScrollHeight;
        sectionHeight = 0;
        break;
      case'about':
          // sectionHeight = this.scrollHeightObj.aboutScrollHeight;
          sectionHeight = 1000;
          break;
      case 'portfolio':
        // sectionHeight = this.scrollHeightObj.portfolioScrollHeight;
        sectionHeight = 1800;
        break;
    }
    const newEvent = new CustomEvent('ScrollToPageSection', {detail:sectionHeight});
    dispatchEvent(newEvent);  
  }

}
