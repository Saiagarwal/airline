import { Injectable} from "@angular/core";

export class Passangerdetails {

    flightnumber! : string;
    destination! : string;
    flightname!: string;
    landingtime! : string;
    source!:string;
    takeoftime!:string;
    email!:string;
    name!:string;

    constructor(flightnumber:string, destination:string, flightname :string, landingtime:string,source:string,takeoftime:string,email:string,name:string){
            this.flightnumber=flightnumber;
            this.destination=destination;
            this.flightname=flightname;
            this.landingtime=landingtime;
            this.source=source;
            this.takeoftime=takeoftime;
            this.email=email;
            this.name=name;
    }
}

