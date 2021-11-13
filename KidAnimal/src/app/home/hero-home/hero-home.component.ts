import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-home',
  templateUrl: './hero-home.component.html',
  styleUrls: ['./hero-home.component.scss']
})
export class HeroHomeComponent implements OnInit {

  scrollHeight:number; 
  scollPassedPoint:boolean = false;

  constructor() { }

  @HostListener('window:ScrollTopHeight',['$event']) onScrollEvent(event):void {
    this.scrollHeight = event.detail;
    if(this.scrollHeight > 100) { 
      this.scollPassedPoint = true 
    } 
  }

  ngOnInit(): void {
  }

  titleStyle(value:number) { 
    return { 
      marginTop: `${value + (value * this.scrollHeight * -1 )}px`
    }
  }

}
