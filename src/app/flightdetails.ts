import { Injectable} from "@angular/core";
export class Flightdetails {

    flightnumber! : string;
    destination! : string;
    flightname!: string;
    landingtime! : string;
    source!:string;
    takeoftime!:string;

    constructor(flightnumber:string, destination:string, flightname :string, landingtime:string,source:string,takeoftime:string){
            this.flightnumber=flightnumber;
            this.destination=destination;
            this.flightname=flightname;
            this.landingtime=landingtime;
            this.source=source;
            this.takeoftime=takeoftime;
    }
}

