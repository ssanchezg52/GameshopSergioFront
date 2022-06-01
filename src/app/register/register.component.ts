import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:string = "";
  password:string = "";
  passwordConfirm:string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
