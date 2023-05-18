import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDmPvLMVHyMPUGiQt9TCsm7Zb-y6s0rCAY",
    authDomain: "todo-app-6e326.firebaseapp.com",
    projectId: "todo-app-6e326",
    storageBucket: "todo-app-6e326.appspot.com",
    messagingSenderId: "620331580763",
    appId: "1:620331580763:web:6342d2319e409d83bdae7e"
  };

// Initialize Firebase

/*It is ok simple react app because there will no several occurences would be occur
 const app = initializeApp(firebaseConfig); */

/*Next.js Approach >  getApps() it will tell us all the initialized apps */
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

/* This is modular v9 approach */
const db = getFirestore(app);

export { db };