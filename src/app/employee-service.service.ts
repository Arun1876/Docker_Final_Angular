import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Customer } from './customer_details';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private http:HttpClient) { }

  public Getweatherforcast()
  {
    this.http.get('http://localhost:49153/weatherforecast').subscribe(data=>  
    { 
       console.log(data);
    },
err=>{
      console.log("Error occured");
} );
    
  }

  public getpost():Observable<Customer[]>
  {
    // return this.http.get<Customer[]>('http://localhost:10861/api/Customers');
    return this.http.get<Customer[]>('http://localhost:49153/weatherforecast');
  }

  promise()
  {
    return this.http.get('http://localhost:49153/weatherforecast').toPromise()
     .then((data:any)=>{
           console.log("data comes:",data.date)
     } 
    
     ).catch().finally();
  }

  observable()
  {
       this.http.get('http://localhost:10861/api/Customers').subscribe(data=>  
         { 
            console.log(data);
            
     },
     err=>{
           console.log("Error occured");
     } );
  }

  post()
  {
 this.http.post('http://localhost:10861/api/Customers',
 {
  cust_Name: 'Venus', 
  age: 29,
  address: 'Pune'}).subscribe(data=>   {  console.log(data); },
     err=>{
           console.log("Error occured");
     } );
  }



put()  {
 this.http.put('http://localhost:10861/api/Customers/3',
 {
  cust_Name: 'Sonu Sharma', 
  age: 29,
  address: 'Pune'}).subscribe(data=>{console.log(data);},err=>{console.log("Error occured");} );
 }


 
}
