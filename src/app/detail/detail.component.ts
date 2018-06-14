import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  pages = [
     
    {name:'event', page:'event'},
    {name:'view', page:'view'},
    
    

  ]
  firstname:'';
  lastname:'';
dateofbirth;
  age:'';
  Date:'';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.queryParams.subscribe(params =>{
      this.firstname=params["firstname"];
      this.lastname=params["lastname"];
      this.dateofbirth=params["dateofbirth"];
      this.age=params["age"];
      this.Date=params["Date"];

      console.log(this.firstname)
      console.log(this.lastname)
      console.log(this.dateofbirth)
      console.log(this.age)
      console.log(this.Date)
     
        }
      )


  }

}
