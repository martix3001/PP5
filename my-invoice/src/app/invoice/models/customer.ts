import { Invoice } from "./invoice";

export class Customer{
    id: string | undefined;
    constructor(){}

    name="";
    nip="";
    miasto="";
    ulica="";
    number="";
    numberM="";
    kod="";
    uwagi=""
    branza="";
    check=true;
    invoices: Invoice[] = [];

    getAddress(){
        return this.kod+" "+this.miasto+" ul."+this.ulica+" nr."+this.number+" nr.mieszkania "+this.numberM
    };
    getCustomerInfo():string {
        return `${this.name} (${this.nip})`;
    }

    deserialize(input: any){
        Object.assign(this,input);
        return this;
    }
    

}