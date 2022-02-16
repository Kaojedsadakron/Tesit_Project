import { Component, OnInit } from '@angular/core';
import { comment } from '../interface/comment';
import { students } from '../interface/student';
import { CrudService } from '../service/crud.service';
@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css']
})
export class TrackingComponent implements OnInit {
  studentsLohin: students
  resArray!: comment[]
  constructor(private service: CrudService) {
    this.studentsLohin = this.service.getStudentsLohin();
  }

  ngOnInit(): void {
    this.getComment()
  }

  

  getComment() {
    this.service.getComment(this.studentsLohin.stuid).then(res => {
      this.resArray = JSON.parse(this.clsString(this.service.getCommentString()))
      this.resArray.forEach(value => {
        console.log("comment "+value)
      })
  
    })

  }

  private clsString(str: string) : string {
    let re = /\{},/gi;
    let x = str.replace(re,"");
    return x
  }

}
