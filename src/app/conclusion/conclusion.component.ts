import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';
import { submission } from '../interface/submission';
import { students } from '../interface/student';

@Component({

  selector: 'app-conclusion',
  templateUrl: './conclusion.component.html',
  styleUrls: ['./conclusion.component.css']
})
export class ConclusionComponent implements OnInit {
  data = [{}]
  date = new Date();
  showDate: any
  finalData: any
  sumSubmission = [0, 0, 0, 0, 0];
  score: any = [];
  dataWeek: any;
  resArray!: submission[]
  sum: any = [];
  sumInterest: any = [];
  sumHundred: any = [];
  studentsLohin: students
  constructor(private service: CrudService) {
    this.studentsLohin = this.service.getStudentsLohin();
  }
  ngOnInit(): void {
    this.getSumOfSubject();
    this.showDate = this.date.toLocaleDateString('th-TH', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  getSumOfSubject() {
    this.service.getFinaldata(this.studentsLohin.stuid).then(res => {
      this.resArray = JSON.parse(this.clsString(this.service.getSubmission()))
      console.log("Subject : " , this.resArray)
      this.resArray.forEach(value => {
        for (let i = 0 ; i<value.data.length ; i++){
          this.sumSubmission[i] = +value.data[i] + this.sumSubmission[i]
        }
      })
      this.dataWeek=this.resArray.length;
      this.sumOfSubject(this.sumSubmission)
    })

  }

  private clsString(str: string) : string {
    let re = /\{},/gi;
    let x = str.replace(re,"");
    return x
  }

  sumOfSubject(score: Array<number>) {
    for (let i = 0; i < score.length; i++) {
      if (score[i] == 10) {
        this.sum.push('ชอบเเละหลงไหลวิชานี้มากๆ')
        this.sumInterest.push('สามารถพัฒนาในวิชานี้ได้แน่นอน')
        this.sumHundred.push(score[i] * 10);
      } else
        if (score[i] <= 9 && score[i] >= 8) {
          this.sum.push('ค่อนข้างชอบวิชานี้อย่างมาก')
          this.sumInterest.push('ค่อนข้างที่จะสามารถพัฒนาในวิชานี้ได้อย่างมาก')
          this.sumHundred.push(score[i] * 10);
        } else
          if (score[i] <= 7 && score[i] >= 6) {
            this.sum.push('ค่อนข้างชอบวิชานี้')
            this.sumInterest.push('ค่อนข้างที่จะสามารถพัฒนาในวิชานี้ได้')
            this.sumHundred.push(score[i] * 10);
          } else
            if (score[i] <= 5 && score[i] >= 4) {
              this.sum.push('ชอบหรือไม่ชอบก็ได้')
              this.sumInterest.push('อาจจะสามารถพัฒนาในวิชานี้ได้')
              this.sumHundred.push(score[i] * 10);
            } else
              if (score[i] <= 3 && score[i] >= 2) {
                this.sum.push('ค่อนข้างไม่ชอบวิชานี้')
                this.sumInterest.push('ค่อนข้างสามารถพัฒนาในวิชานี้ได้ยาก')
                this.sumHundred.push(score[i] * 10);
              } else
                if (score[i] == 1) {
                  this.sum.push('ค่อนข้างไม่ชอบวิชานี้อย่างมาก')
                  this.sumInterest.push('ค่อนข้างสามารถพัฒนาในวิชานี้ได้ยากอย่างมาก')
                  this.sumHundred.push(score[i] * 10);
                } else
                  if (score[i] == 0) {
                    this.sum.push('ไม่ชอบวิชานี้เลย')
                    this.sumInterest.push('สามารถพัฒนาในวิชานี้ได้ยากมาก')
                    this.sumHundred.push(score[i] * 10);
                  }
    }

  }




}

