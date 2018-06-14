import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {


  @Input() name;
  @Input() page;

  @Input() firstname;
  @Input()lastname;
  @Input() dateofbirth;
  @Input() age;
  @Input() Date;
  
  constructor(private router: Router) { }

  ngOnInit() {
  }
  navigator(){

    if (name === 'event'){
      this.router.navigate(['detail/event']);
    
    } else if (this.name ==='view'){

      this.router.navigate(['detail/view'],{queryParams:{firstname:this.firstname,lastname:this.lastname, dateofbirth:this.dateofbirth, age:this.age, Date:this.Date}});
    }

  }

}
