// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFireStore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD7Ohdb9vjYUr8u5-n4fx8ue3yslOqQ9Nw',
  authDomain: 'twitter-clone-25b7a.firebaseapp.com',
  projectId: 'twitter-clone-25b7a',
  storageBucket: 'twitter-clone-25b7a.appspot.com',
  messagingSenderId: '708324476519',
  appId: '1:708324476519:web:d733a964fc081c9ea876c2',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFireStore();
const storage = getStorage();

export { app, db, storage };
