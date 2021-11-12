import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  
  scrollHeight:number; 
  
  @HostListener('window:ScrollTopHeight',['$event']) onScrollEvent(event):void {
    this.scrollHeight = event.detail; 
  }

  constructor() { }

  ngOnInit(): void {
  }

  scrollToSection(heightValue) { 
    const newEvent = new CustomEvent('ScrollToPageSection', {detail:heightValue});
    dispatchEvent(newEvent);  
  }

}
