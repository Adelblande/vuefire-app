import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyDEOjhClkbFBOKw-OT4lloMfi0R0dEpm5s",
  authDomain: "meuprojeto-bf550.firebaseapp.com",
  databaseURL: "https://meuprojeto-bf550.firebaseio.com",
  projectId: "meuprojeto-bf550",
  storageBucket: "meuprojeto-bf550.appspot.com",
  messagingSenderId: "423768631722"
};
const firebaseApp = firebase.initializeApp(config);
export const db = firebaseApp;
