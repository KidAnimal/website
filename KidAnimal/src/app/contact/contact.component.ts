import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  scrollHeight:number; 
  
  constructor() { }

  @HostListener('window:ScrollTopHeight',['$event']) onScrollEvent(event):void {
    this.scrollHeight = event.detail; 
    this.fixedFooter();
  }

  ngOnInit(): void {
  }

  fixedFooter() { 
    if(this.scrollHeight > 1) {
      return { 
        position:"fixed",
        bottom:0
      }
    }
    else { 
      return { 
        visibility:"hidden"
      }
    }
  }

}
