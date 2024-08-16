// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDz-3UzofE4UZJgVlmSb7y_R48dqQKa2rE',
  authDomain: 'movie-recommendation-sys-2ab67.firebaseapp.com',
  projectId: 'movie-recommendation-sys-2ab67',
  storageBucket: 'movie-recommendation-sys-2ab67.appspot.com',
  messagingSenderId: '910739386248',
  appId: '1:910739386248:web:6bbfd6574973be268e143d',
  measurementId: 'G-84QCM21XL8',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
