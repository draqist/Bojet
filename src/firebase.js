import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDWXp5nuGYKcGAIWi9jBfLAlTaUxzDPK34",
  authDomain: "bujet-a7698.firebaseapp.com",
  projectId: "bujet-a7698",
  storageBucket: "bujet-a7698.appspot.com",
  messagingSenderId: "925798264290",
  appId: "1:925798264290:web:2f1e4797c2f5e2cab55dbb",
  measurementId: "${config.measurementId}"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
const analytics = getAnalytics(app);
console.log(analytics)