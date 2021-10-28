import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-home',
  templateUrl: './portfolio-home.component.html',
  styleUrls: ['./portfolio-home.component.scss']
})
export class PortfolioHomeComponent implements OnInit {

  isVisible = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSelected(selection:string):string {
    if (selection !== "" && this.isVisible === selection) {
      return this.isVisible = "";
    } 
    this.isVisible = selection; 
    return this.isVisible;
  }

}
