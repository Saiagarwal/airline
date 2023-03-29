import { Injectable} from "@angular/core";
export class Flightdetails {

    flightnumber! : string;
    destination! : string;
    flightname!: string;
    landingtime! : string;
    source!:string;
    takeoftime!:string;
    price!:number;

    constructor(flightnumber:string, destination:string, flightname :string, landingtime:string,source:string,takeoftime:string,price:number){
            this.flightnumber=flightnumber;
            this.destination=destination;
            this.flightname=flightname;
            this.landingtime=landingtime;
            this.source=source;
            this.takeoftime=takeoftime;
            this.price=price;
    }
}

