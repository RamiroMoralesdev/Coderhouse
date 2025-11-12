import { collection, getDocs, doc, getDoc, addDoc, query, where, orderBy } from 'firebase/firestore';
import { db } from './firebase.js';

// Obtener todos los productos
export const getProducts = async () => {
  try {
    // Collection devuelve todos los documentos de una products
    const productsCollection = collection(db, 'products');
    const productsSnapshot = await getDocs(productsCollection); /*Espera la respuesta*/
    const products = productsSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return products;
  } catch (error) {
    console.error('Error getting products: ', error);
    throw error;
  }
};

// Obtener productos por categoría
export const getProductsByCategory = async (categoryId) => {
  try {
    const productsCollection = collection(db, 'products');
    const q = query(productsCollection, where('category', '==', categoryId)); 
    const productsSnapshot = await getDocs(q);
    const products = productsSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return products;
  } catch (error) {
    console.error('Error getting products by category: ', error);
    throw error;
  }
};

// Obtener un producto por ID
export const getProductById = async (id) => {
  try {
    const productDoc = doc(db, 'products', id);
    const productSnapshot = await getDoc(productDoc);
    
    if (productSnapshot.exists()) {
      return {
        id: productSnapshot.id,
        ...productSnapshot.data()
      };
    } else {
      throw new Error('Product not found');
    }
  } catch (error) {
    console.error('Error getting product: ', error);
    throw error;
  }
};

// Crear una orden
export const createOrder = async (orderData) => {
  try {
    const ordersCollection = collection(db, 'orders');
    const docRef = await addDoc(ordersCollection, {
      ...orderData,
      date: new Date(),
      status: 'pending'
    });
    return docRef.id;
  } catch (error) {
    console.error('Error creating order: ', error);
    throw error;
  }
};

// Función auxiliar para inicializar productos en Firestore (solo para desarrollo)
export const initializeProducts = async (products) => {
  try {
    const productsCollection = collection(db, 'products');
    const promises = products.map(product => addDoc(productsCollection, product));
    await Promise.all(promises);
    console.log('Products initialized successfully');
  } catch (error) {
    console.error('Error initializing products: ', error);
    throw error;
  }
};