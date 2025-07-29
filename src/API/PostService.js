import { collection, doc, getDoc, getDocs, getFirestore } from 'firebase/firestore';
import { app } from 'firebase.js';

const db = getFirestore(app);
const usersRef = collection(db, "users");

function wait() {
    return new Promise(resolve => {
        setTimeout(resolve, 1200);
    });
}

export default class PostService {
    static async getAsyncFetch() {
        await wait();
    }

    static async getUsers() {
        let arr = []; 
        const querySnapshot = await getDocs(usersRef);
        querySnapshot.forEach((doc) => {
            arr.push(doc.data())
        });
        return arr;
    }
}