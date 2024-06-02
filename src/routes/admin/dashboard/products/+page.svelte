<script>
    /** @type {import('./$types').PageData} */
    export let data;

    import Product from '$lib/Admin/Product.svelte';

    const products = data.products;
    console.log(data.products);
</script>

<div class="products">
    <h1>Products</h1>
    {#each products as product}
        <Product {product} />
    {/each}
</div>

<style>
    .products {
        display: flex;
        flex-direction: column;
    }
</style>