import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAc7vsJ2YkH_VrCapyfPSFeu0rfSj3sTxU",
  authDomain: "burjet-io.firebaseapp.com",
  projectId: "burjet-io",
  storageBucket: "burjet-io.appspot.com",
  messagingSenderId: "1056847344325",
  appId: "1:1056847344325:web:5f465de15b62532256b6ac",
  measurementId: "G-6XHYEPHHDS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);