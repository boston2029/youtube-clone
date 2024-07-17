import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";

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

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault()

  createUserWithEmailAndPassword(auth, document.querySelector("input[type=email]").value, document.querySelector("input[type=password]").value).catch(err => {
    alert("Error: "+err)
  })
})

onAuthStateChanged(auth, (user) => {
  if (user) {
    location.href='/upload'
  }
})