import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-portfolio-home',
  templateUrl: './portfolio-home.component.html',
  styleUrls: ['./portfolio-home.component.scss']
})
export class PortfolioHomeComponent implements OnInit {

  isVisible = '';
  scrollHeight:number; 
  
  constructor() { }

  @HostListener('window:ScrollTopHeight',['$event']) onScrollEvent(event):void {
    this.scrollHeight = event.detail; 
  }
  
  ngOnInit(): void {
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

  titleStyle(scrollSpeed:number, additionalMargin:number) { 
    return { 
      marginTop: `${(scrollSpeed + additionalMargin) - this.scrollHeight }px`,
    }
  }

}
