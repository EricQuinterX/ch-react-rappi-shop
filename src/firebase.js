// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, getDocs, collection, query, where, doc, getDoc, addDoc } from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export async function getFoods() {
  const querySnapshot = await getDocs(collection(db, 'foods'));
  const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return data;
}

export async function getFoodsByCategory(category) {
  const q = query(collection(db, 'foods'), where('category', '==', category));
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return data;
}

export async function getFoodId(id) {
  const docRef = doc(db, 'foods', id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  } else {
    console.log("No such document!");
    return null;
  }
}

export async function getOrders() {
  const querySnapshot = await getDocs(collection(db, 'orders'));
  const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return data;
}

export async function createOrder(order) {
  const docRef = await addDoc(collection(db, 'orders'), order);
  return docRef.id;
}