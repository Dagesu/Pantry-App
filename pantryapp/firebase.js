import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDR-1vYW-FFmqKDfhabXsmcMVKPpdnv6IU",
    authDomain: "hspantry-app-3d17f.firebaseapp.com",
    projectId: "hspantry-app-3d17f",
    storageBucket: "hspantry-app-3d17f.appspot.com",
    messagingSenderId: "25655925762",
    appId: "1:25655925762:web:b0765c2617b7f6a61c5b1b"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const firestore = getFirestore(app);

export { firestore };
