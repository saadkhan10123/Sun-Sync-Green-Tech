<script>
    /** @type {import('./$types').LayoutData} */
    export let data;

    import Header from '$lib/Header/Header.svelte';


    // Import the functions you need from the SDKs you need
    import { initializeApp } from "firebase/app";
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


</script>

<Header />
<div class="header-placeholder"></div>
<slot />

<style>
    :global(body) {
        font-family: Arial, sans-serif;
        margin: 0;
        min-height: 100svh;
        display: flex;
        flex-direction: column;
    }

    :global(main) {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        flex: 1;
    }

    :global(button) {
        cursor: pointer;
    }

    .header-placeholder {
        height: 5rem;
    }
</style>