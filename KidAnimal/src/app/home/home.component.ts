import { Component, HostListener, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  @HostListener('window:scroll', ['$event']) onWindowScroll(e) {
    console.log(e.target['scrollingElement'].scrollTop)
    console.log('Scrolling');
  }

  status = 'loading';

  constructor() {
  }

  ngOnInit() {
    this.status = 'ready';
    // this.status = 'intro';
    // setTimeout(()=> {
    //   this.status = 'ready';
    // },9600);
  }

}
