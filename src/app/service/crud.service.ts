import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { getDatabase, ref, set } from "firebase/database";
import { getFirestore, doc, getDoc, setDoc, collection, addDoc, updateDoc, deleteDoc, deleteField, getDocs } from 'firebase/firestore';
import { user } from '../interface/user';
@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(public firestoreService: AngularFirestore) { }

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

  async submitDoc(data:string) {
    const db = getFirestore();
    var ref = collection(db, "submission");
    const docRef = await addDoc(
      ref, {
      data:data
    }
    ).then(() => {
      alert("success");
    })
  }

  ////////////////////////////// get
  async getData() {
    const db = getFirestore();
    let data = [{}]
    const docSnap = await getDocs(collection(db, "user"));
    docSnap.forEach((doc) => {
      // data.push(doc.data() as user)
      // data.forEach((user) => {
      //   console.log(user)
      // });

      let y = JSON.stringify(doc.data())

      let obj: user = JSON.parse(y);
      data.push(obj)
      console.log(obj)

    }); console.log(data)
    return data

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

