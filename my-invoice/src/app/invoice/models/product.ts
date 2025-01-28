export class Product {
  id: string | undefined
  name: string;
  price: string;

  constructor(name: string = "", price: string = "") {
    this.name = name;
    this.price = price;
  }
  

getProductInfo():any {
    return `${this.name} (${this.price})`;
  }

deserialize(input: any){
    Object.assign(this,input);
    return this;
}
  
}