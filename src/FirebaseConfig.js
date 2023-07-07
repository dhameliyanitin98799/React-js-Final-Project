import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
  apiKey: "AIzaSyBeXkVuKMLVflg4Ckvhv77E5ADepgY0fZY",
  authDomain: "e-commerce-app-e97aa.firebaseapp.com",
  projectId: "e-commerce-app-e97aa",
  storageBucket: "e-commerce-app-e97aa.appspot.com",
  messagingSenderId: "626080546013",
  appId: "1:626080546013:web:a4728f2adf3e3392582f34",
  measurementId: "G-W1W5MSEMRP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const database = getDatabase(app);
export const fireStoreDb = getFirestore(app);