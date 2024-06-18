<script>
    import { colorPalette } from '$lib/Stores/colorPalette';
    import { goto } from '$app/navigation';
</script>

<header style:background-color={$colorPalette.primary}>
    <div on:click={() => goto('/')}>Header</div>
    <nav>
        <ul>
            <li><a href="/calculator">Caclculator</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/solar-packages">Solar Packages</a></li>
            <li><a href="">Products</a></li>
            <li><a href="">Net Metering</a></li>
            <li><a href="">Projects</a></li>
            <li><a href="">Blogs</a></li>
            <li><a href="">Shop</a></li>
        </ul>
    </nav>
</header>

<style>
    header > div {
        cursor: pointer;
    }
    header {
        color: white;
        padding: 1rem;
        display: flex;
        position: fixed;
        width: 100svw;
        height: 3em;
        top: 0;
        left: 0; 
        z-index: 5;
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