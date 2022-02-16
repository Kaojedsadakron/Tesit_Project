import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';
import { students} from '../interface/student'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: any
  password: any
  statuslogin : boolean = false
  studentLogin : students | undefined

  constructor(
    private service: CrudService,
    private router: Router) { }

  ngOnInit(): void {
  }

  login(email: string, password: string) {
    this.service.getStudent().subscribe(students => {
      let Students : students[] = students
      for(let i = 0 ; i < Students.length ; i++){
        if(Students[i].email == email && Students[i].password == password){
          this.statuslogin  = true
          this.router.navigate(["/profile"])
          this.studentLogin = Students[i] as students
          break;
        }else{
          this.statuslogin  = false
        }
      }
      if(!this.statuslogin){
        alert("Your email or password is incorrect. Please try again.")
      }else{
        this.service.setStudentsLohin(this.studentLogin!!);
      }
    });
  }
}
