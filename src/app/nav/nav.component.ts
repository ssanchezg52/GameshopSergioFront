import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interfaces/User';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Input() currentComponent!:string;
  user!:User | undefined;
  authenticated:boolean = false;

  constructor(private tokenService:TokenService, private router:Router) { }

  ngOnInit(): void {
    if (this.currentComponent != undefined){
      $(".separator[name='"+ this.currentComponent +"']").css("color","black");
      $(".separator[name='"+ this.currentComponent +"']").css("cursor","auto");
      $(".separator[name='"+ this.currentComponent +"']").css("font-weight","bold");
    }
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
