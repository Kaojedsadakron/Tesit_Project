import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service' 
import { students } from '../interface/student'
declare var exportData: any;
@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {
finaldata:any=[];
data:any = [];
dataaa:any = ['dont like','like']
subject1:any
subject2:any
subject3:any
subject4:any
subject5:any
studentsLohin : students
  constructor(public crudService:CrudService) {
    this.studentsLohin = this.crudService.getStudentsLohin();
   }

  ngOnInit(): void {

  }

  submit(){
    this.data.push(this.subject1)
    this.data.push(this.subject2)
    this.data.push(this.subject3)
    this.data.push(this.subject4)
    this.data.push(this.subject5)
    for (let i = 0; i < 5; i++) {
      if(this.data[i].includes('dont like') || this.data[i].includes('don\'t like')|| this.data[i].includes('do not like') || this.data[i].includes('hate')|| this.data[i].includes('ไม่ชอบ')|| this.data[i].includes('ไม่น่าเรียน')|| this.data[i].includes('ไม่สนุก')|| this.data[i].includes('การบ้านเยอะ')){
        this.finaldata.push('0')
      }else{
        this.finaldata.push('1')
      }
    }
    this.crudService.submitDoc(this.finaldata,this.studentsLohin.stuid)
    console.log(this.finaldata)
    this.finaldata = [];
    this.data = [];
  }

  

}
