import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-home',
  templateUrl: './about-home.component.html',
  styleUrls: ['./about-home.component.scss']
})
export class AboutHomeComponent implements OnInit {

  scrollHeight:number;
  isMobile:boolean = false;

  constructor() { }

  @HostListener('window:ScrollTopHeight',['$event']) onScrollEvent(event):void {
    this.scrollHeight = event.detail;
  }

  @HostListener('window:resize',['$event']) onResizeEvent(event):void {
    this.isMobile = (window.innerWidth < 549) ? true : false;
  }

  ngOnInit(): void {
    if(window.innerWidth < 549) {
      this.isMobile = true;
    }
    this.initGSAPAnimations();
  }

  initGSAPAnimations() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to('.illustrate', {
      y: -400,
      duration:2,
      scrollTrigger: {
        scroller: '.viewport',
        trigger: '.illustrate',
        start: '-200% 10%',
        end: 'center',
        scrub: true
      }
    })
    gsap.to('.sectionAboutText', {
      y: -300,
      duration:3,
      scrollTrigger: {
        scroller: '.viewport',
        trigger: '.illustrate',
        start: '-200% 10%',
        end: 'center',
        scrub: true
      }
    })
  }

}
