import { collection, doc, getDoc, getDocs, getFirestore } from 'firebase/firestore';
import { app } from 'firebase.js';

const db = getFirestore(app);
const testRef = collection(db, "test");

function wait() {
    return new Promise(resolve => {
        setTimeout(resolve, 1200);
    });
}

export default class PostService {
    static async getAsyncFetch() {
        await wait();
    }

    static async getAllProducts() {
        let arr = []; 
        const querySnapshot = await getDocs(testRef);
        querySnapshot.forEach((doc) => {
            arr.push(doc.data())
        });
        return arr;
    }
}