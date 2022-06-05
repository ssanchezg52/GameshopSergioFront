import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interfaces/User';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  user!:User | undefined;
  authenticated:boolean = false;

  constructor(private tokenService:TokenService, private router:Router) { }

  ngOnInit(): void {
  }

  showContainerAccount(){
    this.authenticated = this.tokenService.authenticated;
    this.user = this.tokenService.getUser();
    if ($(".accountContainer").css("display") == "none"){
      $(".accountContainer").css("display","flex");
      $(".iconArrowAccountContainer").show();
    }else{
      $(".accountContainer").hide();
      $(".iconArrowAccountContainer").hide();
    }
  }

  logout(){
    this.tokenService.logOut();
    this.router.navigate(["/login"]);
  }

}
