  
import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public message: string;
  public errorMsg: string;
  public loading:boolean = false;
  constructor(
    public userService: UserService,
    public router: Router
    ) { }
  login(event) {
    event.preventDefault();
    const form = event.target;
    const user = {
      email: form.email.value,
      password: form.password.value,
    }
    this.loading=true;
    this.userService.login(user)
      .subscribe(
        res => {
          this.message = res.message;
          this.loading=false;
          setTimeout(() => {this.router.navigate(['']);}, 1000);},
        err => {
          this.errorMsg = err.error.message
          this.loading=false;
          setTimeout(() => this.errorMsg = "", 2500);
        }
      );
  }
}