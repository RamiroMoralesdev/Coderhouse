import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAADVztApJVIfV5IlgDmhGDuPGGjqQgj0w",
  authDomain: "proyecto-final-react-9a76d.firebaseapp.com",
  projectId: "proyecto-final-react-9a76d",
  storageBucket: "proyecto-final-react-9a76d.firebasestorage.app",
  messagingSenderId: "806525391815",
  appId: "1:806525391815:web:fa17ec7bd843bb1d9c7fe2"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);