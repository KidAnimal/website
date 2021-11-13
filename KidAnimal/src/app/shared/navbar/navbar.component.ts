import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  revealLinks:boolean = false;
  navBarActive: boolean = false;
  mobileView: boolean = false; 
  scrollHeight:number; 
  
  @HostListener('window:ScrollTopHeight',['$event']) onScrollEvent(event):void {
    this.scrollHeight = event.detail; 
  }

  @HostListener('window:resize',['$event']) onResizeEvent(event):void {
    this.mobileView = window.innerWidth <= 800 ? true : false; 
  }

  constructor() { }

  ngOnInit(): void {
    if(window.innerWidth <= 800) { 
      this.mobileView = true;
    }
  }

}
