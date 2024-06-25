/* eslint-disable no-undef */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: import.meta.env.PORTFOLIO_FIREBASE_API_KEY,
    authDomain: import.meta.env.PORTFOLIO_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.PORTFOLIO_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.PORTFOLIO_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.PORTFOLIO_FIREBASE_SENDER_ID,
    appId: import.meta.env.PORTFOLIO_FIREBASE_APP_ID,
    measurementId: import.meta.env.MEASUREMENT_ID
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

//finally do this steps
// firebase login
// firebase init
// firebase deploy
