import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';
import { submission } from '../interface/submission';
@Component({

  selector: 'app-conclusion',
  templateUrl: './conclusion.component.html',
  styleUrls: ['./conclusion.component.css']
})
export class ConclusionComponent implements OnInit {
  data = [{}]
  finalData: any
  sumSubmission = [0,0,0,0,0];
  score: any = [];
  sum: any = [];
  constructor(private service: CrudService) { }
  ngOnInit(): void {
  }

  getSumOfSubject() {
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

