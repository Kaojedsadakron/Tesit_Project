import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: any
  password: any

  constructor(private service: CrudService) { }

  ngOnInit(): void {
  }

  login(email: string, password: string) {
    let x = this.service.login(email, password)
    let x1 = JSON.stringify(x)
    let y = this.service.logincheck()
    let y1 = JSON.stringify(y)
    const values = Object.values(x);

    // const commaJoinedValues = values.join(",");
    // console.log(commaJoinedValues);
    console.log("login ", x1)
    console.log("login ", y1)
    if (x1 == y1) {
      console.log("failLogin")
    } else {
      console.log("successlogin")
    }
  }
}
