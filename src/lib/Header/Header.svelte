<header>
    <h1>Header</h1>
    <nav>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
    </nav>
</header>

<style>
    header {
        background-color: #333;
        color: white;
        padding: 1rem;
        display: flex;
        position: fixed;
        width: 100svw;
        height: 3em;
        top: 0;
        left: 0; 
    }

    nav ul {
        display: flex;
        gap: 1rem;
        list-style: none;
    }

    nav a {
        color: white;
        text-decoration: none;
    }

    header > h1 {
        margin: 0;
    }

</style>