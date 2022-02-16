import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { getDatabase, ref, set } from "firebase/database";
import { getFirestore, doc, query, getDoc, where, setDoc, collection, addDoc, updateDoc, deleteDoc, deleteField, getDocs } from 'firebase/firestore';
import { submission } from '../interface/submission'
import { Observable } from 'rxjs';
import { user } from '../interface/user';
import { students } from '../interface/student'

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  items: Observable<any>;
  user: Observable<any>;
  studentsLohin: students;
  submission: submission[]

  constructor(public firestoreService: AngularFirestore) {
    this.items = this.firestoreService.collection('submission').valueChanges();
    this.user = this.firestoreService.collection('student').valueChanges();
    this.studentsLohin = this.setStudentNull();
    this.submission = this.setSubmissionNull();
  }

  //////////////////////////// insert
  async addDoc(name: string, age: number, address: string) {
    const db = getFirestore();
    var ref = collection(db, "user");
    const docRef = await addDoc(
      ref, {
      name: name,
      age: age,
      address: address
    }
    ).then(() => {
      alert("success");
    })
  }

  setStudentsLohin(studentsLohin: students) {
    this.studentsLohin = studentsLohin
  }

  getStudentsLohin(): students {
    return this.studentsLohin
  }

  getStudent() {
    return this.user
  }

  setSubmission(submission: any) {
    this.submission = submission
  }

  getSubmission(): string {
    return JSON.stringify(this.submission)
  }



  async submitDoc(data: string, idStudent: string) {
    const db = getFirestore();
    var ref = collection(db, "submission");
    const docRef = await addDoc(
      ref, {
      data: data,
      idStudent: idStudent
    }
    ).then(() => {
      alert("success");
    })
  }

  async getFinaldata(Id: string) {
    const db = getFirestore();
    const q = query(collection(db, "submission"), where("idStudent", "==", Id));
    const querySnapshot = await getDocs(q);
    let submission = [{}]
    querySnapshot.forEach((doc) => {
      submission.push(doc.data() as submission)
    });
    this.setSubmission(submission);

    // return this.items
  }

  ////////////////////////////// get
  async getData() {
    const db = getFirestore();
    let data = [{}]
    const docSnap = await getDocs(collection(db, "submission"));
    docSnap.forEach((doc) => {

      let y = JSON.stringify(doc.data())

      let obj = JSON.parse(y);
      data.push(obj)

    }); //console.log(data)
    let Arrayobjdata: submission[] = []
    for (let i = 0; i < data.length; i++) {
      let objdata = JSON.parse(JSON.stringify(data[i])) as submission;
      Arrayobjdata.push(objdata)
    }
    return Arrayobjdata

  }

  /////////////////////////////////login
  async login(email: any, password: any) {
    const db = getFirestore();
    let statuslogin: number = 0
    const docSnap = await getDocs(collection(db, "user"));
    docSnap.forEach((doc) => {

      let y = JSON.stringify(doc.data())

      let obj: user = JSON.parse(y);
      if (obj.name == email && obj.address == password) {

        statuslogin = statuslogin + 1
        return statuslogin
      } else {

        statuslogin = statuslogin + 0
        return statuslogin
      }

    });

    return statuslogin

  }

  async logincheck() {
    const db = getFirestore();
    let data = [{}]
    let statuslogin: number = 0


    return statuslogin

  }

  private setStudentNull(): students {
    var stu: students = {
      advisor: "",
      degree: "",
      earn_kit_score: "",
      email: "",
      faculty: "",
      group: "",
      highschool_gaduate: "",
      highschool_gpax: "",
      id: "",
      img: "",
      kit_score: "",
      major: "",
      name: "",
      name_degree: "",
      name_eng: "",
      password: "",
      start: "",
      status: "",
      stuid: "",
      university: "",
      university_gpax: ""
    }
    return stu
  }

  private setSubmissionNull(): submission[] {
    var submission: submission[] = [
      {
        data: "",
        idStudent: ""
      }
    ]
    return submission
  }

}

