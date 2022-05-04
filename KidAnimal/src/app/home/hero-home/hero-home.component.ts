import { AfterViewInit, Component, ElementRef, HostListener, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-hero-home',
  templateUrl: './hero-home.component.html',
  styleUrls: ['./hero-home.component.scss']
})
export class HeroHomeComponent implements OnInit {

  scrollHeight: number;
  height: number;
  scollPassedPoint: boolean = false;

  constructor() { }

  @ViewChildren('scrollElement') scrollElement: QueryList<ElementRef>;

  @HostListener('window:ScrollTopHeight', ['$event']) onScrollEvent(event): void {
    this.scrollHeight = event.detail;
    if (this.scrollHeight > 100) {
      this.scollPassedPoint = true
    }
  }

  ngOnInit(): void {
    this.initGSAPAnimations();
  }

  initGSAPAnimations() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to('#title', {
      y: -500,
      duration:2,
      scrollTrigger: {
        scroller: '.viewport',
        trigger: '#title',
        start: 'top 60%',
        end: 'bottom',
        scrub: true
      }
    })
  }
}
