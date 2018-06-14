import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  firstname:"";
  lastname:"";
  dateofbirth:"";
  age:"";
  Date:"";

  constructor(private router: Router,) {

   }

  ngOnInit() {
    }

  saveData(){
    

  }
  booking(){
    console.log(this.firstname);
    console.log(this.lastname);
    console.log(this.dateofbirth);
    console.log(this.age);
    console.log(this.Date);
    this.router.navigate(['detail']), {firstname: this.firstname, lastname:this.lastname ,dateofbirth:this.dateofbirth , age:this.age, Date:this.Date}
  }

}
