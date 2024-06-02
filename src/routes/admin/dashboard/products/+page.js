import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, getDocs, setDoc, query, where } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBCyyJRtuXhoGhp6gWnDJ1XMGDgPf4oHcU",
    authDomain: "sun-sync-solar.firebaseapp.com",
    projectId: "sun-sync-solar",
    storageBucket: "sun-sync-solar.appspot.com",
    messagingSenderId: "83746841637",
    appId: "1:83746841637:web:d0b69290ee00fcd7af0bcc",
    measurementId: "G-FW377QQ6H5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);

/** @type {import('./$types').PageLoad} */
export async function load() {
    let products = [];
    
    const querySnapshot = await getDocs(collection(db, "products"));
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        let product = doc.data();
        product.id = doc.id;
        product.imgURL = `https://firebasestorage.googleapis.com/v0/b/sun-sync-solar.appspot.com/o/products%2F${doc.id}?alt=media&token=73d65c06-00d3-493c-8e88-4eb889a81d4d`
        products.push(product);
    });

    return { products };
};