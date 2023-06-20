import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBPMMJk9D6bETrE2OGf4NRJXQceiwn_8m8",
  authDomain: "vizi-4475.firebaseapp.com",
  projectId: "vizi-4475",
  storageBucket: "vizi-4475.appspot.com",
  messagingSenderId: "890552890223",
  appId: "1:890552890223:web:3d2b2b3af287c575f9ae9a",
  measurementId: "G-JB1MV64HXG"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();


export { app, auth };
