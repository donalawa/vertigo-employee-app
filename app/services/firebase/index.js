import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

export const firebaseConfig = {
    apiKey: "AIzaSyAn-XctQKpRd4DDIPsRWPNqWTYtHAHj4OY",
    authDomain: "vertigo-fa65c.firebaseapp.com",
    projectId: "vertigo-fa65c",
    storageBucket: "vertigo-fa65c.appspot.com",
    messagingSenderId: "815859435939",
    appId: "1:815859435939:web:69416bd8bb1f7dead2b216",
    measurementId: "G-ZVCVD6VCCK"
};


const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const fireStorage = getStorage(app);
const authentication = getAuth(app);


export { fireDB, fireStorage, authentication }