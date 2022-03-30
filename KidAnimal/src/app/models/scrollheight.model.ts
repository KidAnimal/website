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
  travelDistance: TravelDistanceEnums;
  rateOfChange?: TravelSpeedEnums;

  constructor(options: any) {
    this.nativeElement = options.nativeElement;
    this.scrollTop = options.scrollTop;
    this.travelDistance = options.travelDistance;
    this.rateOfChange = options.rateOfChange;

  }
}

export enum TravelDistanceEnums {
  xshort = 10,
  short = 20,
  medium = 30,
  long = 40,
  extraLong = 50,
  wtf = 60
}

export enum TravelSpeedEnums {
  vSlow  = 1,
  slow = 25,
  paced = 50,
  fast = 100,
  faster = 150,
  fastest = 200,
  wtfIsThisSeriously = 300
}
