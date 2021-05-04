import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyAR2Ifcv1IKBtuWEUmTXQLCF_B_O2bvqV4",
    authDomain: "netflix-6aa5a.firebaseapp.com",
    projectId: "netflix-6aa5a",
    storageBucket: "netflix-6aa5a.appspot.com",
    messagingSenderId: "697244904841",
    appId: "1:697244904841:web:96bb8fe0376e0b0cc4c558"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

seedDatabase(firebase);

export { firebase };
