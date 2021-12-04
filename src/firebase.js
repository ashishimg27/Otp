import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB89g75kfpS2ES_XX0ikInMngT-KyA_29Y",
  authDomain: "otpa-ac8f5.firebaseapp.com",
  projectId: "otpa-ac8f5",
  storageBucket: "otpa-ac8f5.appspot.com",
  messagingSenderId: "8000926306",
  appId: "1:8000926306:web:963dc9a52926196f11573b",
  measurementId: "G-9HLSZ4F6VK"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
export default firebase
