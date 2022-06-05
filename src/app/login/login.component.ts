import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2/lib/swal.component';
import * as Swal from 'sweetalert2';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  profileForm!:FormGroup;
  user = new FormControl('',[Validators.required,Validators.minLength(3)])
  pass = new FormControl('',[Validators.required,Validators.minLength(3)]);

  constructor(private tokenService:TokenService) {
    this.profileForm=new FormGroup({});
    this.profileForm.setControl('username',this.user);
    this.profileForm.setControl('password',this.pass);
  }

  ngOnInit(): void {
  }

  login(){
    if (this.profileForm.valid){
      $(".spinnerContainer").css("display","flex");
      this.tokenService.getAccessToken(this.user.value,this.pass.value);
    }else{
      let usernameControl = this.profileForm.get("username");
      let passwordControl = this.profileForm.get("password");
      alert("ERROR USUARIO" + usernameControl?.errors + "\n" + "ERROR CONTRASEÑA"+ passwordControl?.errors)
    }
  }

}
