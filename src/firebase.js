// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhF9wZiVZzMRXOptLqGzqRj3RmFOsCZJo",
  authDomain: "netflix-clone-12dca.firebaseapp.com",
  projectId: "netflix-clone-12dca",
  storageBucket: "netflix-clone-12dca.appspot.com",
  messagingSenderId: "703117536261",
  appId: "1:703117536261:web:a5911175665869ac11406c",
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseapp);
const db = getStorage(firebaseapp);

export { auth };
export default db;
