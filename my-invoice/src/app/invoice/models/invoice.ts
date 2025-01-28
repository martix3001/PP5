import { Tax } from "./tax";

export class Invoice{
    constructor(name: string,quantity:number){
        this.name=name;
        this.quantity=quantity;
    }

    name: string;
    quantity: number;
    netto?: number;
    tax?: Tax;
    brutto?: number;

}