<script>
    /** @type {import('./$types').PageData} */
    export let data;

    // Import the functions you need from the SDKs you need
    import { initializeApp } from "firebase/app";
    import { getAnalytics } from "firebase/analytics";
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
    const analytics = getAnalytics(app);

</script>

<div class="add-product">
    <form action="">
        <img src="" alt="an image">
        <input type="text" placeholder="Product Name">
        <input type="text" placeholder="Product Price">
        <input type="text" placeholder="Product Description">
        <input type="text" placeholder="Product Image">
        <button type="submit">Add Product</button>
    </form>
</div>