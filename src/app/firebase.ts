// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
    apiKey: "AIzaSyB4cqRZlT7xeGemT9JreFoz-NGEca7Pphg",
    authDomain: "loginex-c4bfb.firebaseapp.com",
    projectId: "loginex-c4bfb",
    storageBucket: "loginex-c4bfb.appspot.com",
    messagingSenderId: "142958664202",
    appId: "1:142958664202:web:902b04ab05c008a63a9df3"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Exporta la instancia de la aplicación Firebase
export default app;