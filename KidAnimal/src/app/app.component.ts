import { Component, Host, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    
  ]
})
export class AppComponent { 
  title: string = 'KidAnimal';
  scrollTop: number = 0; 

  constructor() {}

  @HostListener('window:ScrollToPageSection', ['$event']) onPaginationHandler(event) { 
    let element = document.getElementsByClassName("viewport"), 
      viewPort = element[0];
      viewPort.scrollTop = event.detail;
  }

  @HostListener('document:scroll',['$event']) scrollHandler(event) {
    let element = document.getElementsByClassName("viewport"), 
        viewPort = element[0];
    this.scrollTop = viewPort.scrollTop;
    const newEvent = new CustomEvent('ScrollTopHeight', {detail: this.scrollTop});
    dispatchEvent(newEvent);
    return this.scrollTop;
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.animation;
  }

}
