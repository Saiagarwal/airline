import { Injectable} from "@angular/core";

export class Passangerdetails {

    flightnumber! : string;
    destination! : string;
    flightname!: string;
    landingtime! : string;
    source!:string;
    takeoftime!:string;
    price!:number;
    email!:string;
    fname!:string;
    lname!:string;
    dateofbirth!:string;
    address!:string;
    country!:string;
    code!:string;
    phone!:number;
    

    constructor(flightnumber:string, destination:string, flightname :string, landingtime:string,source:string,takeoftime:string,email:string,price:number,fname:string,lname:string,dateofbirth:string,address:string,country:string,code:string,phone:number){
            this.flightnumber=flightnumber;
            this.destination=destination;
            this.flightname=flightname;
            this.landingtime=landingtime;
            this.source=source;
            this.takeoftime=takeoftime;
            this.email=email;
            this.price=price;
            this.fname=fname;
            this.lname=lname;
            this.dateofbirth=dateofbirth;
            this.address=address;
            this.country=country;
            this.code=code;
            this.phone=phone;
    }
}

