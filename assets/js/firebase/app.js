
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBmhvjpYYNwwyeeMsIW-gdQ4ZV5-iwXSzQ",
    authDomain: "mundo-invertido-21bc0.firebaseapp.com",
    projectId: "mundo-invertido-21bc0",
    storageBucket: "mundo-invertido-21bc0.appspot.com",
    messagingSenderId: "96159891910",
    appId: "1:96159891910:web:5cc0c6a5898498b98232c7",
    measurementId: "G-60K32M8R0F"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  
  export default app