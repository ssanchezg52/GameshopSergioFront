import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterUser } from '../interfaces/RegisterUser';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  profileForm!:FormGroup;
  user = new FormControl('',[Validators.required,Validators.minLength(3)])
  pass = new FormControl('',[Validators.required,Validators.minLength(3)]);
  passConfirm = new FormControl('',[Validators.required,Validators.minLength(3)]);

  constructor(private tokenService:TokenService, private router:Router) {
    this.profileForm=new FormGroup({});
    this.profileForm.setControl('username',this.user);
    this.profileForm.setControl('password',this.pass);
    this.profileForm.setControl('passwordConfirm',this.passConfirm)
  }

  ngOnInit(): void {
  }

  signUp(){
    if (this.profileForm.valid){
      let registerUser:RegisterUser = {user:this.user.value,pass:this.pass.value,passConfirm:this.passConfirm.value}
      this.tokenService.registerNewUser(registerUser);
      setTimeout(()=>{

      },110)
    }else{
      let usernameControl = this.profileForm.get("username");
      let passwordControl = this.profileForm.get("password");
      let passwordConfirmControl = this.profileForm.get("passwordConfirm");
      console.error("ERROR USUARIO",usernameControl?.errors);
      console.error("ERROR CONTRASEÑA",passwordControl?.errors);
      console.error("ERROR CONTRASEÑA CONFIRMADO ",passwordConfirmControl?.errors);
    }
  }

}
