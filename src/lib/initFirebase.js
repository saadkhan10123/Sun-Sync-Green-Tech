import { initializeApp } from "firebase/app";

export async function initFirebase() {
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
    return app;
}