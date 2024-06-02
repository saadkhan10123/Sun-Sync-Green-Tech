/** @type {import('./$types').PageServerLoad} */

import { redirect } from '@sveltejs/kit';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, doc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { get } from 'svelte/store';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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


export async function load() {
    return {};
};

export const actions = {
    default: async ({ request, cookies }) => {
            
        let data = await request.formData();
        let name = data.get('name');
        let price = data.get('price');
        let description = data.get('description');
        let image = data.get('image');

        const db = getFirestore(app);
        const storage = getStorage(app);

        // Parse JSON into array
        description = JSON.parse(description);

        //Add a new document with a generated id.
        const docRef = await addDoc(collection(db, "products"), {
            name: name,
            price: price,
            description: description
        });

        // Metadata for image
        const metadata = {
            contentType: 'image/jpeg',
            product: {
                name: name,
                price: price,
                description: description,
                id: docRef.id
            }
        };

        // Submit image to storage
        const storageRef = ref(storage, 'products/' + docRef.id, metadata);

        // Upload file
        await uploadBytes(storageRef, image);

        // Redirect to dashboard
        redirect(302, '/admin/dashboard/home');
    }
}