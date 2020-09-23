import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public message:string;

  constructor(
    public userService: UserService,
    public router: Router
  ) { }

  ngOnInit(): void {
  }
  register(event){
    event.preventDefault();
    console.log("asd");
    const form =event.target;
    const user={
      name: form.name.value,
      surname: form.surname.value,
      email: form.email.value,
      adress: form.adress.value,
      postal: form.postal.value,
      password: form.password.value
    }
    this.userService.signup(user)
    .subscribe(
      res=>{
        console.log(res);
        this.message=res.message;
        setTimeout(() => {this.router.navigate(['login']);}, 1000);},
      err=>console.error(err)
    )
    event.target.reset();
  }
}
