import { Component } from '@angular/core';
import { RestService } from 'src/app/rest.service';
import { Flightdetails } from 'src/app/flightdetails';
import {Router} from '@angular/router';
import { Passangerdetails } from 'src/app/passangerdetails';

@Component({
  selector: 'app-choose',
  templateUrl: './choose.component.html',
  styleUrls: ['./choose.component.css']
})
export class ChooseComponent {
  router: any;
  constructor(private restServices: RestService){}
  bookStatus: boolean= false;
  destination!: string;
  source!:string;

  flightObj={
    destination:this.destination,
    source:this.source
  }

  passenger! : Passangerdetails;

  confirm:boolean=false;
  flightData:Flightdetails[]=[];


  search() {
    this.bookStatus=true;
    if (this.bookStatus==true) {
    this.restServices.searchf(this.flightObj).subscribe({
      next: (data:Flightdetails[]) => this.flightData = data,
      error: (err: any) => console.log(err)
    })
      console.log(this.bookStatus);
      this.router.navigate(['customer-details']);
    }
    else {
      console.log("Please choose")
    }
  }
  book(fly : Flightdetails)
  {   
      this.confirm=true;
      this.bookStatus=false;
      this.passenger.flightnumber=fly.flightnumber;
      this.passenger.destination=fly.destination;
      this.passenger.flightname=fly.flightname;
      this.passenger.landingtime=fly.landingtime;
      this.passenger.source=fly.source;
      this.passenger.takeoftime=fly.takeoftime;
      

  }
  submit(passenger : Passangerdetails){
    this.restServices.bass(this.passenger).subscribe({
      next: (data) => console.log(data), // use to do anyhing like printing and all
      error: (err: any) => console.log(err)
    })
  }

}
