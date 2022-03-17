import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAAnqJaldVFAxWjuUWRYQ0wcxN-ja2ba0E',
  authDomain: 'house-marketplace-app-fb937.firebaseapp.com',
  projectId: 'house-marketplace-app-fb937',
  storageBucket: 'house-marketplace-app-fb937.appspot.com',
  messagingSenderId: '761861005543',
  appId: '1:761861005543:web:c7c6840fb4869182244242',
}

initializeApp(firebaseConfig)
export const db = getFirestore()
