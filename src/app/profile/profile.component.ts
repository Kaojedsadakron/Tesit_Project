import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';
import { students } from '../interface/student'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  studentsLohin : students

  constructor(
    private service: CrudService,
  )
  {
    this.studentsLohin = this.service.getStudentsLohin();
  }

  ngOnInit(): void {
    console.log("studentLogin : " , this.studentsLohin)
  }

}
