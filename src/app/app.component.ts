import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'dating app';
  users:any;

  constructor(private http:HttpClient){}
  ngOnInit() {
    // throw new Error('Method not implemented.');
    this.getusers();
  }

  getusers(){
    this.http.get('https://localhost:44335/api/users').subscribe(response => {
      this.users=response;
    }, error =>{
      console.log(error);
      
    })
  }
}
