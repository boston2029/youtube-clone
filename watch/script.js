import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-database.js";
import { getStorage, ref as storageRef, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-storage.js";

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
const storage = getStorage();

let params = new URLSearchParams(document.location.search)
let videoID = params.get("v")

if (videoID != undefined && videoID.length==6) {
  getDownloadURL(storageRef(storage, "videos/"+videoID)).then(url => {
    document.querySelector("video").src=url
  })

  onValue(ref(db, "videos/"+videoID), (snapshot) => {
    document.querySelector("h1").innerText=snapshot.val().name
  })
}



let mousedownonvideo = false
let mousedowntimer
let shouldSpeedUp = false

function startMouseDownTimer() {
  mousedowntimer = setTimeout(function(){
    
  },1000)
}

document.querySelector("video").addEventListener("mousedown", (e) => {
  mousedownonvideo = true
  startMouseDownTimer()
})

document.querySelector("video").addEventListener("mouseup", (e) => {
  if (shouldSpeedUp == true) {
    document.querySelector("video").playbackRate=1
  } else {
    // timer hasn't gone off yet
    document.querySelector("video").play()
  }
  mousedownonvideo = false
  clearTimeout(mousedowntimer)
})