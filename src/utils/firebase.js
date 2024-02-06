import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig ={
  apiKey: "AIzaSyCCWei5OHIdFTp9EvMFFNoTAAIdUnd24vE",
  authDomain: "gdsc-app-93b7b.firebaseapp.com",
  projectId: "gdsc-app-93b7b",
  storageBucket: "gdsc-app-93b7b.appspot.com",
  messagingSenderId: "238888016747",
  appId: "1:238888016747:web:419aa5bcd49b2597484a2e",
  measurementId: "",
};

// Initialize firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const auth = getAuth();
