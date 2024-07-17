import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
import { getStorage, ref, listAll, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-storage.js";

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
const storage = getStorage();

listAll(ref(storage, "videos")).then(response => {
  response.items.forEach(item => {
    getDownloadURL(ref(storage, "videos/"+item.name)).then(url => {
      document.querySelector("#videos").innerHTML+=`<video width="100" src="${url}" ondblclick="location.href='/watch/?v=${item.name}'"></video><br>`
    })
  })
})

let currentPreview

document.querySelector("#videos").addEventListener("mousedown", (e) => {
  if (e.target.nodeName!="VIDEO") return
  currentPreview=e.target
  e.target.playbackRate=3
  e.target.play()
})

document.querySelector("#videos").addEventListener("mouseup", (e) => {
  if (currentPreview==null) return
  currentPreview.pause()
  currentPreview.currentTime=0
  currentPreview=null
})