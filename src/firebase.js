import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
// const firebaseConfig = {
//     apiKey: "AIzaSyB13PntUEDMkFbTt2psiHOZtQih83qrf88",
//     authDomain: "whatsapp-clone-fafc9.firebaseapp.com",
//     databaseURL: "https://whatsapp-clone-fafc9.firebaseio.com",
//     projectId: "whatsapp-clone-fafc9",
//     storageBucket: "whatsapp-clone-fafc9.appspot.com",
//     messagingSenderId: "1027981883218",
//     appId: "1:1027981883218:web:f62f32ffe8e5701f0f2c8b",
//     measurementId: "G-0YMF5ZZL8N"
//   };
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmyjDm3z1Jxt1zL3_GQ8bEUJkWYIWsUlo",
  authDomain: "zeddapps-oddi.firebaseapp.com",
  databaseURL: "https://zeddapps-oddi.firebaseio.com",
  projectId: "zeddapps-oddi",
  storageBucket: "zeddapps-oddi.appspot.com",
  messagingSenderId: "125993447017",
  appId: "1:125993447017:web:5d83fa77f2810e8e5a7cf8",
  measurementId: "G-1447ZW4LYX"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
