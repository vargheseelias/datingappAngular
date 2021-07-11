import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'dating app';
  users:any;

  constructor(private accountService:AccountService,){}
  ngOnInit() {
    // throw new Error('Method not implemented.');
    this.setCurrentUser();
  }

  setCurrentUser(){    
    const user:User=JSON.parse(localStorage.getItem('user')||"");
    console.log(user);
    
    this.accountService.setCurrentUser(user);
  }

  
}
