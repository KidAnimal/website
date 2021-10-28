import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  status = 'loading';

  @HostListener('window:scroll', ['$event']) onScroll(event) {
      console.log(event);
      console.log(window.scrollY);
    }

  constructor() { }

  ngOnInit() {
    this.status = 'ready';
    // this.status = 'intro';
    // setTimeout(()=> {
    //   this.status = 'ready';
    // },9600);
  }

}
