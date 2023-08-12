import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCNolkEFjUYYpspS5W8tcV5LYD9DHnCsh4",
  authDomain: "astraeus-e98ab.firebaseapp.com",
  projectId: "astraeus-e98ab",
  storageBucket: "astraeus-e98ab.appspot.com",
  messagingSenderId: "250760204172",
  appId: "1:250760204172:web:76d4b368aa5becd0dc50a9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
