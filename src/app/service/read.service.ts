import {
    getFirestore,
    getDocs,
    collection,
    doc    
} from "firebase/firestore"

const db = getFirestore();

export async function getData() {
    const querySnapshot = await getDocs(collection(db, "user"));
    // let res = [];
    // querySnapshot.forEach((doc) => {
    //     res.push(doc.data());
    // }); 
    return querySnapshot;
}