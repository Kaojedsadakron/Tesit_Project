import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { getDatabase, ref, set } from "firebase/database";
import { getFirestore, doc, getDoc, setDoc, collection, addDoc, updateDoc, deleteDoc, deleteField, getDocs } from 'firebase/firestore';
import { submission } from '../interface/submission'
import { Observable } from 'rxjs';
import { user } from '../interface/user';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  items: Observable<any>;
  constructor(public firestoreService: AngularFirestore) { 
    this.items = this.firestoreService.collection('submission').valueChanges();
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

  async submitDoc(data: string) {
    const db = getFirestore();
    var ref = collection(db, "submission");
    const docRef = await addDoc(
      ref, {
      data: data
    }
    ).then(() => {
      alert("success");
    })
  }

  getFinaldata(){
    return this.items
  }

  ////////////////////////////// get
  async getData() {
    const db = getFirestore();
    let data = [{}]
    const docSnap = await getDocs(collection(db, "submission"));
    docSnap.forEach((doc) => {
      // data.push(doc.data() as user)
      // data.forEach((user) => {
      //   console.log(user)
      // });

      let y = JSON.stringify(doc.data())

      let obj = JSON.parse(y);
      data.push(obj)
      //console.log(obj)

    }); //console.log(data)
    let Arrayobjdata : submission [] = []
    for (let i = 0 ; i<data.length ;i++) {
      let objdata = JSON.parse(JSON.stringify(data[i])) as submission;
      Arrayobjdata.push(objdata)
    }
    return Arrayobjdata

  }

  /////////////////////////////////login
  async login(email: any, password: any) {
    const db = getFirestore();
    let data = [{}]
    let statuslogin: number = 0
    const docSnap = await getDocs(collection(db, "user"));
    docSnap.forEach((doc) => {
      // data.push(doc.data() as user)
      // data.forEach((user) => {
      //   console.log(user)
      // });

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

}

