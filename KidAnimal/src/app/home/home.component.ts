import { Component, ElementRef, HostListener, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

// ANIMATIONS
import { basicTransition } from '../angular_animations/basicTransition';

// MODELS
import { ScrollHeight } from '../models/scrollheight.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [basicTransition]
})

export class HomeComponent implements OnInit {

  // General Variables
  status = 'loading';

  // Go to View Button Variables
  scrollHeight:number;
  scrollHeightObj: ScrollHeight = {}

  @ViewChild('home') homeSection: ElementRef;
  @ViewChild('about') aboutSection: ElementRef;
  @ViewChild('portfolio') portfolioSection: ElementRef;

  @HostListener('window:ScrollTopHeight',['$event']) onScrollEvent(event):void {
    this.scrollHeight = event.detail;
  }

  constructor() {
  }

  ngOnInit() {
    this.status = 'ready';
    if(sessionStorage.getItem('home-scroll-height')){
      const newEvent = new CustomEvent('ScrollToPageSection', {detail:sessionStorage.getItem('home-scroll-height')});
      dispatchEvent(newEvent);
    }
    // this.status = 'intro';
    // setTimeout(()=> {
    //   this.status = 'ready';
    // },9600);
  }

  ngAfterViewInit(): void {
    this.getHomePageScrollHeights();
  }

  getHomePageScrollHeights() {
    this.scrollHeightObj = {
      homeScrollHeight: this.homeSection.nativeElement.scrollHeight,
      aboutScrollHeight: this.aboutSection.nativeElement.scrollHeight,
      portfolioScrollHeight: this.portfolioSection.nativeElement.scrollHeight
    }
    const newEvent = new CustomEvent('KAScrollHeightEvent', {detail:this.scrollHeightObj});
    dispatchEvent(newEvent);
  }
}
