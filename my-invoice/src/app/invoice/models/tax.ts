export class Tax {
    rate: number;    
    description: string;
  
    constructor(rate: number, description: string) {
      this.rate = rate;
      this.description = description;
    }
  
    // Możesz dodać funkcję do obliczania kwoty podatku
    calculateTax(netto: number): number {
      return (netto * this.rate) / 100;
    }
  }
  