import { Component, HostBinding, OnInit } from '@angular/core';
import {
  trigger, 
  state, 
  style, 
  animate, 
  transition,
  query,
  stagger,
}
from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: []
})
export class AppComponent { 
  title = 'KidAnimal';
}
