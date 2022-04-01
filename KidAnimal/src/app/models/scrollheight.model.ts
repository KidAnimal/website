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
  startScrollHeight?: StartScrollHeightEnums;
  travelDistance: TravelDistanceEnums;
  rateOfChange?: TravelSpeedEnums;
  marginBottom?: number;

  constructor(options: any) {
    this.nativeElement = options.nativeElement;
    this.scrollTop = options.scrollTop || 0;
    this.startScrollHeight = options.startScrollHeight || 0;
    this.travelDistance = options.travelDistance || TravelDistanceEnums.medium;
    this.rateOfChange = options.rateOfChange || TravelSpeedEnums.paced;
    this.marginBottom = options.marginBottom || 0;
  }
}

export enum StartScrollHeightEnums {
  vClose = 300,
  close = 400,
  norm = 500,
  far = 600,
  vFar = 700,
  FarAF = 800
}

export enum TravelDistanceEnums {
  xshort = 100,
  short = 200,
  medium = 300,
  long = 400,
  extraLong = 500,
  wtf = 600
}

export enum TravelSpeedEnums {
  vSlow  = 0.5,
  slow = 1,
  paced = 1.2,
  fast = 1.5,
  faster = 1.7,
  fastest = 2.0,
  wtfIsThisSeriously = 2.5
}
