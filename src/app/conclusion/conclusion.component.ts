import { Component, OnInit } from '@angular/core';
import { Papa } from 'ngx-papaparse';
import { CrudService } from '../service/crud.service';
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { user } from '../interface/user';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { runInThisContext } from 'vm';
import { submission } from '../interface/submission';
@Component({

  selector: 'app-conclusion',
  templateUrl: './conclusion.component.html',
  styleUrls: ['./conclusion.component.css']
})
export class ConclusionComponent implements OnInit {
  userId: any;
  userName: any;
  userAge: any;
  userAddress: any;
  data = [{}]
  finalData: any
  sumSubmission = [0,0,0,0,0];


  score: any = [];
  sum: any = [];
  constructor(private service: CrudService) { }
  ngOnInit(): void {
  }

  createUser(evt: any) {
    this.finalData = this.service.getData()
    var files = evt.target.files; // FileList object
    var subject_count = 5
    var final_score = [0, 0, 0, 0, 0]
    Object.values(this.finalData).forEach((element: any) => {
      element.text().then((text: any, reject: any) => {
        console.log("resolve", text)
        text = text.split(",")
        for (var i = 1; i <= subject_count; i++) {
          final_score[i - 1] += parseInt(text[i])
        }
      }).then(() => {

      })
      console.log("final", final_score)
    });

    let data = [{}]
    console.log("type ", this.finalData)
  }


  handleFileSelect(evt: any) {
    var files = evt.target.files; // FileList object
    var subject_count = 5
    var final_score = [0, 0, 0, 0, 0]
    Object.values(files).forEach((element: any) => {
      element.text().then((text: any, reject: any) => {
        console.log("resolve", text)
        text = text.split(",")
        for (var i = 1; i <= subject_count; i++) {
          final_score[i - 1] += parseInt(text[i])
        }
      }).then(() => {

      })
      console.log("final", final_score)
    });

  }

  test() {
    this.service.getFinaldata().subscribe(res => {
      let resArray: submission[] = res
      resArray.forEach(value => {
        for (let i = 0 ; i<value.data.length ; i++){
          this.sumSubmission[i] = +value.data[i] + this.sumSubmission[i]
        }
      })
      
      this.sumOfSubject(this.sumSubmission)
    });

  }

  sumOfSubject(score: Array<number>) {
    for (let i = 0; i < score.length; i++) {
      if(score[i] == 10){
        this.sum.push('ชอบเเละหลงไหลวิชานี้มากๆ')
      }else
      if(score[i] <= 9 && score[i] >= 7){
        this.sum.push('ชอบวิชานี้')
      }else
      if(score[i] <= 6 && score[i] >= 4){
        this.sum.push('ชอบหรือไม่ชอบก็ได้แต่ก็ยังพอใช้ได้ในวิชานี้แต่ก็ยังไม่ได้ดี')
      }else
      if(score[i] <= 3 && score[i] > 0){
        this.sum.push('ค่อนข้างไม่ชอบวิชานี้')
      }else
      if(score[i] == 0){
        this.sum.push('ไม่ชอบวิชานี้มากๆ')
      }
    }
    console.log('score ' + this.sum)
  }




}

