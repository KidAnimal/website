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
    this.initGSAPAnimations();
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

  initGSAPAnimations() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to('#illustration', {
      marginTop: 0,
      duration:3,
      scrollTrigger: {
        scroller: '.viewport',
        trigger: '#illustration',
        start: '-200% 60%',
        end: 'top 10%',
        scrub: true
      }
    })
    gsap.to('#programming', {
      marginTop: 0,
      duration: 4,
      scrollTrigger: {
        scroller: '.viewport',
        trigger: '#illustration',
        start: '-200% 60%',
        end: 'top 10%',
        scrub: true
      }
    })
    gsap.to('#design', {
      marginTop: 0,
      duration: 5,
      scrollTrigger: {
        scroller: '.viewport',
        trigger: '#illustration',
        start: '-200% 60%',
        end: 'top 10%',
        scrub: true
      }
    })
  }

}
