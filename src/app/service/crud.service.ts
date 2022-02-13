import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore'
import { getDatabase, ref, set } from "firebase/database";
import { getFirestore,doc,getDoc,setDoc,collection,addDoc,updateDoc,deleteDoc,deleteField } from 'firebase/firestore';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  
  constructor(public firestoreService:AngularFirestore) { }

  async addDoc (name:string,age:number, address:string) {
    const db = getFirestore();
    var ref = collection(db,"user");

    const docRef = await addDoc(
      ref,{
        name:name,
        age:age,
        address:address
      }
    ).then(()=>{
      alert("success");
    })
  }

}
