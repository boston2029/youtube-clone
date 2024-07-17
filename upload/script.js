import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
import { getStorage, ref, uploadBytesResumable } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-storage.js";

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

onAuthStateChanged(auth, (user) => {
  if (!user) {
    location.href='/signup'
  }
})

function makeid(length) {
  let result = [];
  const characters =
      "0123456789";
  let charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
      result.push(
          characters.charAt(Math.floor(Math.random() * charactersLength))
      );
  }
  return result.join("");
}

document.querySelector('input[type=file]').addEventListener('change', (e) => {
  const uploadedFile = e.target.files[0]
  const videoID = makeid(6)
  const uploadation = uploadBytesResumable(ref(storage, "videos/"+videoID), uploadedFile)
  document.querySelector('progress').style.display='block'
  uploadation.on('state_changed', (snapper) => {
    const progress = (snapper.bytesTransferred / snapper.totalBytes) * 100
    document.querySelector('progress').value=progress
  }, (e)=>{alert("Error: "+e)}, () => {
    alert("Your video has been uploaded!")
    location.href="/watch/?v="+videoID
  })
})