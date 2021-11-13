export class ScrollHeight { 
  homeScrollHeight?: number; 
  aboutScrollHeight?: number; 
  portfolioScrollHeight?: number; 
  contactScrollHeight?: number; 

  constructor(options: any) { 
      this.homeScrollHeight = options.homeScrollHeight; 
      this.aboutScrollHeight = options.aboutScrollHeight; 
      this.portfolioScrollHeight = options.portfolioScrollHeight;
      this.contactScrollHeight = options.contactScrollHeight;
  }
}