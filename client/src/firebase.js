import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCCLdwj4HqKR4K2VmNNwMGUpEKK8gJATsY',
  authDomain: 'clone-c5a8d.firebaseapp.com',
  projectId: 'clone-c5a8d',
  storageBucket: 'clone-c5a8d.appspot.com',
  messagingSenderId: '743263683335',
  appId: '1:743263683335:web:88ce6089ec4f66a6027ba2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
