import firebase from 'firebase/app';
import 'firebase/database'
import 'firebase/analytics'
const firebaseConfig = {
  apiKey: "AIzaSyCq0yE7Ab88rJDjuMHYoArTH9u6RSbDT4Q",
  authDomain: "the-website-ak.firebaseapp.com",
  databaseURL: "https://the-website-ak.firebaseio.com",
  projectId: "the-website-ak",
  storageBucket: "the-website-ak.appspot.com",
  messagingSenderId: "160284644241",
  appId: "1:160284644241:web:99b15822eaf9485aa98030",
  measurementId: "G-PKX2C3EFXG"
};

firebase.initializeApp(firebaseConfig);
export const analytics = firebase.analytics();
export default firebase;
