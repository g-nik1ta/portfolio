import { collection, doc, getDoc, getDocs, getFirestore } from 'firebase/firestore';
import { app } from 'firebaseInit';

const db = getFirestore(app);
const testRef = doc(db, "test", "table");

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
        const querySnapshot = await getDoc(testRef);
        if (querySnapshot.exists()) {
            console.log("Document data:", querySnapshot.data());
        } else console.log("No such document!");
    }
}