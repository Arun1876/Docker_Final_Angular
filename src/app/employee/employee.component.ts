import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer_details';
import { EmployeeServiceService } from '../employee-service.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  promise1:string="";
  observable:string="";

  
  public response :Observable<Customer> |any;
  postId:number=5;
  constructor(private service:EmployeeServiceService, private http:HttpClient) { 
    this.response=this.service.getpost();
  }

  ngOnInit(): void {
      // console.log("Promise:",this.service.promise());
      // console.log("Observable:",this.service.observable());
      // console.log("Post:",this.service.post());
      // console.log("Put:",this.service.put());
     console.log("Weather Foast",this.service.promise())
     
  }


}
