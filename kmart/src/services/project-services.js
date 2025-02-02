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

// export const getProductById = async (id) => {
//     const docRef = doc(db, 'products', id);          // Get the document reference
//     const snapshot = await getDoc(docRef);           // Fetch the document
  
//     if (snapshot.exists()) {
//       return { id: snapshot.id, ...snapshot.data() };
//     } else {
//       throw new Error('Product not found');
//     }
//   };