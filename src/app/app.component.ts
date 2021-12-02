import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Userresponse } from './Userresponse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'APICall';
  result='';
  constructor(private http:HttpClient){}
  ngOnInit():void{

    // const req=this.http.post('http://jsonplaceholder.typicode.com/posts' ,
    // {
    //     title:'foo',
    //     body:'bar',
    //     userid:1
    // }
    // )
    // .subscribe(
    //         res=>{console.log(res)
    //         },
    //         err=>{
    //           console.log("Error occures");
    //         }

    // );
    
    // this.http.get('https://api.github.com/users/abdullah').toPromise()
    //  .then((data:any)=>{
    //        console.log(data)
    //  } 
    
    //  ).catch().finally();
   
    //  this.http.get<Userresponse>('https://api.github.com/users/abdullah').subscribe(data=>  
    //      { 
    //         console.log("User Login",data.login);
    //         console.log("User Name",data.name);
    //         console.log("User ID",data.id);
    //  },
    //  err=>{
    //        console.log("Error occured");
    //  } );
  }
}
