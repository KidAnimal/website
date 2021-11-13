<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { Component, ElementRef, HostListener, Inject, Input, OnInit, ViewChild } from '@angular/core';

// ANIMATIONS 
import { basicTransition } from '../angular_animations/basicTransition';

// MODELS
import { ScrollHeight } from '../models/scrollheight.model';
=======
=======
>>>>>>> 680b696c7283e4484d1a396f7ae5d926ac702ba9
=======
>>>>>>> 680b696c7283e4484d1a396f7ae5d926ac702ba9
import { Component, HostListener, Inject, Input, OnInit } from '@angular/core';

// Animations 
import { basicTransition } from '../angular_animations/basicTransition';
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 680b696c7283e4484d1a396f7ae5d926ac702ba9
=======
>>>>>>> 680b696c7283e4484d1a396f7ae5d926ac702ba9
=======
>>>>>>> 680b696c7283e4484d1a396f7ae5d926ac702ba9

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [basicTransition]
})

export class HomeComponent implements OnInit {

<<<<<<< HEAD
<<<<<<< HEAD
  scrollHeight:number;
  
  scrollheights: ScrollHeight = {}
  
  @ViewChild('home') homeSection: ElementRef;  
  @ViewChild('about') aboutSection: ElementRef; 
  @ViewChild('portfolio') portfolioSection: ElementRef; 
  @ViewChild('contact') contactSection: ElementRef; 
  

=======
  scrollHeight:number; 
  
>>>>>>> 680b696c7283e4484d1a396f7ae5d926ac702ba9
=======
  scrollHeight:number; 
  
>>>>>>> 680b696c7283e4484d1a396f7ae5d926ac702ba9
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

  ngAfterViewInit(): void {
    this.scrollheights = { 
      homeScrollHeight: this.homeSection.nativeElement.scrollHeight, 
      aboutScrollHeight: this.aboutSection.nativeElement.scrollHeight, 
      portfolioScrollHeight: this.portfolioSection.nativeElement.scrollHeight, 
      contactScrollHeight: this.contactSection.nativeElement.scrollHeight
    }

    console.log('ScrollHeights', this.scrollheights);
  }

}
