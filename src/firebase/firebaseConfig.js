// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDZ7Ht33HuYhsq2TAUMZyjHyjm3NNTjb4Y',
  authDomain: 'news-of-asia.firebaseapp.com',
  projectId: 'news-of-asia',
  storageBucket: 'news-of-asia.appspot.com',
  messagingSenderId: '315057750175',
  appId: '1:315057750175:web:5d54a20444d1665e6062aa',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export default app
