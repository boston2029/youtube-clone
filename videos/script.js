import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-database.js";

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
const db = getDatabase();

onValue(ref(db, "videos"), (snapshot) => {
  document.getElementById("videos").innerHTML=''
  snapshot.forEach(video => {
    let listElement = document.getElementById("videos").appendChild(document.createElement("a"))
    listElement.href=`/watch/?v=${video.key}`
    listElement.innerText=`${video.val().name} - ${video.val().views||0} views`
  })
})