import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "loginonecart-8dc6c.firebaseapp.com",
  projectId: "loginonecart-8dc6c",
  storageBucket: "loginonecart-8dc6c.firebasestorage.app",
  messagingSenderId: "863550983295",
  appId: "1:863550983295:web:f7228fb391e99b6c38434a"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()


export { auth, provider }