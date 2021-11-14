import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-home',
  templateUrl: './about-home.component.html',
  styleUrls: ['./about-home.component.scss']
})
export class AboutHomeComponent implements OnInit {

  scrollHeight:number = 0; 
  isMobile:boolean = false; 
  scrollDown:boolean = false;
  scrollCount:number;
  scrollCountArray:any[] = [];
  
  constructor() { }

  @HostListener('window:ScrollTopHeight',['$event']) onScrollEvent(event):void {
    this.scrollHeight = event.detail; 
  }

  @HostListener('window:resize',['$event']) onResizeEvent(event):void {
    this.isMobile = (window.innerWidth < 800) ? true : false;
  }

  ngOnInit(): void {
    if(window.innerWidth < 800) { 
      this.isMobile = true;
    }
    this.scrollCount = 1;
  }

  titleStyle(value:number, additionalMargin:number, tabletMargin:number, mobileMargin:number) { 
    return;
    // if(window.innerWidth < 549 && mobileMargin > 0) {
    //   return { 
    //     marginTop: `${(this.scrollHeight * - value) + mobileMargin}px`
    //   }
    // }

    // if(window.innerWidth < 549 && tabletMargin > 0) {
    //   return { 
    //     marginTop: `${(this.scrollHeight * - value) + mobileMargin}px`
    //   }
    // }

    // return { 
    //   marginTop: `${(this.scrollHeight * - value) + additionalMargin}px`
    // }
  }

  bootyStyle(baseMargin:number, rateOfChange:number, amountOfChange:number) {
    let scrollTempValue;  
    if(Number.isInteger(rateOfChange % this.scrollHeight)) {
      if(this.scrollCountArray[1] !== undefined) {
        scrollTempValue = this.scrollCountArray[1];
        if((this.scrollCountArray[0] > this.scrollCountArray[1]) === true) {
          this.scrollCount += 1;
          this.scrollDown = true;
        } 
        else if((this.scrollCountArray[0] < this.scrollCountArray[1]) === true) {
          this.scrollCount -= 1;
          this.scrollDown = false; 
        }  
        this.scrollCountArray.length = 0;
        this.scrollCountArray[0] = scrollTempValue;
        this.scrollCountArray[1] = this.scrollHeight;
      }
      else { 
        this.scrollCountArray.push(this.scrollHeight);
      }
      console.log('SCROLLCOUNT', this.scrollCount);
    }
    if(this.scrollDown) {
      console.log('DOWN',baseMargin - (this.scrollCount + rateOfChange + amountOfChange));
      return { 
        marginTop: `-${baseMargin - (this.scrollCount + rateOfChange + amountOfChange)}px`
      }
    }
    else { 
      console.log('UP', baseMargin - (this.scrollCount - rateOfChange - amountOfChange))
      return { 
        marginTop: `-${baseMargin - (this.scrollCount - rateOfChange - amountOfChange)}px`
    } 
  }
}

    // Do we need to decrement when the user scrolls downard???
    // else { 

    // }
    
}
