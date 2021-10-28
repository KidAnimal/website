import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  status = 'loading';

  constructor() { }

  ngOnInit() {
    this.status = 'ready';
    // this.status = 'intro';
    // setTimeout(()=> {
    //   this.status = 'ready';
    // },9600);
  }

}
