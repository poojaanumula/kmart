import { collection, getDocs } from 'firebase/firestore';
import {db } from '../config/firestore'
export const getAllProducts = async () => {
  const collectionRef = collection(db, 'products');
  const snapshot = await getDocs(collectionRef);
  const cleanedDocs = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return cleanedDocs;
};
