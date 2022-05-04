import { AfterViewInit, Component, ElementRef, HostListener, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { gsap } from 'gsap';
import 'scrollmagic/scrollmagic/minified/plugins/animation.gsap.min'
import "ScrollMagic/scrollmagic/minified/plugins/debug.addIndicators.min";
import * as ScrollMagic from 'ScrollMagic';
// MODELS
import { ScrollHeightElements, StartScrollHeightEnums, TravelDistanceEnums, TravelSpeedEnums } from 'src/app/models/scrollheight.model';

@Component({
  selector: 'app-hero-home',
  templateUrl: './hero-home.component.html',
  styleUrls: ['./hero-home.component.scss']
})
export class HeroHomeComponent implements OnInit, AfterViewInit {

  scrollHeight: number;
  height: number;
  scollPassedPoint: boolean = false;
  scrollElementMap: ScrollHeightElements[] = [];
  controller = new ScrollMagic.Controller();

  constructor() { }

  @ViewChildren('scrollElement') scrollElement: QueryList<ElementRef>;

  @HostListener('window:ScrollTopHeight', ['$event']) onScrollEvent(event): void {
    this.scrollHeight = event.detail;
    if (this.scrollHeight > 100) {
      this.scollPassedPoint = true
    }
  }

  ngOnInit(): void {
      //Init ScrollMagic

        var nonsenseScene = new ScrollMagic.Scene({
            triggerElement:'.blankDiv'
        })
        .setClassToggle('.blankDiv','toggleOff')
        .addTo(this.controller);

        if(document.getElementById('heroText')) {
          var backgroundScene = new ScrollMagic.Scene({
              triggerElement:'#heroText',
              duration:1000,
              offset: -200
          })
          .setTween('.columnPort', {duration: 100, x: 1000})
          .setClassToggle('.quoteText','title_Slide_Up')
          .addTo(this.controller)
          .addIndicators();
      }

  }

  ngAfterViewInit(): void {
  }
}
