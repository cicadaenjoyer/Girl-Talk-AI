
import { initializeApp } from 'firebase/app';
import { generatePodcast, type Podcast } from '@/api/podcasts';
import {
  getFirestore,
  getDocs,
  getDoc,
  setDoc,
  updateDoc,
  doc,
  collection
} from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


/**
 * Stores a podcast to the user's database
 **/
export async function storePodcast(podcast: Podcast, db_id: string) { 
  const userRef = doc(db, 'users', db_id);
  const userSnap = await getDoc(userRef);

  if (userSnap.exists()) {
    await updateDoc(userRef, {
      podcasts: arrayUnion(podcast)
    });
    console.log(`Added podcast ${podcast.title} to user ${db_id}.`);
  } else {
    console.log(`User ${db_id} does not exist, creating it first.`);
    await setDoc(userRef, {
      createdAt: new Date().toISOString(),
      podcasts: [podcast]
    });
  }
}

/**
 * Creates a database for the user
**/
export async function createDatabase(db_id: string) {
  const userRef = doc(db, 'users', db_id);
  const userSnap = await getDoc(userRef);

  if (!userSnap.exists()) {
    // Create with initial data
    await setDoc(userRef, { 
      createdAt: new Date().toISOString(),
      podcasts: []
    });
    console.log(`Created user ${db_id}.`);
  } else {
    console.log(`User ${db_id} already exists.`);
  }
}

/**
 * Returns the user's data stored in the db
 **/
export async function getUser(db_id: string) {
  const userRef = doc(db, 'users', db_id);
  const userSnap = await getDoc(userRef);

  if (userSnap.exists()) {
    return userSnap.data();
  } else {
    console.log(`User ${db_id} not found`);
    createDatabase(db_id);
    return null;
  }
}
