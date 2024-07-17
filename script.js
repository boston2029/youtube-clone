import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBntOXNr3A0xTbstz8d66CzSbgGNKgRkQg",
  authDomain: "clone-3a598.firebaseapp.com",
  projectId: "clone-3a598",
  storageBucket: "clone-3a598.appspot.com",
  messagingSenderId: "851750777511",
  appId: "1:851750777511:web:0aa9f90eb4961eef9d6182"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  if (user) {
    document.getElementById("signOutBtn").style.display='inline'
    document.querySelector(".ctamain").style.display='none'
    document.querySelector(".ctasecond:not(#signOutBtn)").style.display='none'
  } else {
    document.getElementById("signOutBtn").style.display='none'
    document.querySelector(".ctamain").style.display='inline'
    document.querySelector(".ctasecond:not(#signOutBtn)").style.display='inline'
  }
})

document.getElementById("signOutBtn").onclick=function(){
  signOut(auth).then(() => {
    location.href='/feed'
  })
}