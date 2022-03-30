export class ScrollHeight { 
  homeScrollHeight?: number; 
  aboutScrollHeight?: number; 
  portfolioScrollHeight?: number; 

  constructor(options: any) { 
      this.homeScrollHeight = options.homeScrollHeight; 
      this.aboutScrollHeight = options.aboutScrollHeight; 
      this.portfolioScrollHeight = options.portfolioScrollHeight;
  }
}

export class ScrollHeightElements { 
  nativeElement?: any; 
  scrollTop?: number;
  travelDistance?: number;
  // travelDistance: TravelDistanceEnums;
  startScrollHeight?: number;
  rateOfChange?: number; 

  constructor(options: any) { 
    this.nativeElement = options.nativeElement;
    this.scrollTop = options.scrollTop; 
    this.travelDistance = options.travelDistance; 
    this.startScrollHeight = options.startScrollHeight;
    this.rateOfChange = options.rateOfChange; 

  }
}

export enum TravelDistanceEnums { 
  xshort = 1,
  short = 2, 
  medium = 3, 
  long = 4, 
  extraLong = 5, 
  wtf = 6 
} 