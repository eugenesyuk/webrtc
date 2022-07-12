// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyCGuGlbSATyrSrquKhS5GG_f4jej-JabOU',
    authDomain: 'hangout-mate.firebaseapp.com',
    projectId: 'hangout-mate',
    storageBucket: 'hangout-mate.appspot.com',
    messagingSenderId: '211687468107',
    appId: '1:211687468107:web:f98a30852147335bc1b1ce'
}

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig)
export const firestore = getFirestore(firebase)
