import { Component, HostListener, Inject, Input, OnInit } from '@angular/core';

// Animations 
import { basicTransition } from '../angular_animations/basicTransition';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [basicTransition]
})

export class HomeComponent implements OnInit {

  scrollHeight:number; 
  
  @HostListener('window:ScrollTopHeight',['$event']) onScrollEvent(event):void {
    this.scrollHeight = event.detail; 
  }

  status = 'loading';

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

}
