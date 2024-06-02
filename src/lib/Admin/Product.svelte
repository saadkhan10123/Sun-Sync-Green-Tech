<script>
    export let product;

    console.log(product);
</script>

<div class="product">
    <div class="img-container">
        <img src="{product.imgURL}" alt="">
    </div>
    <div class="info-container">
        <h1>{product.name}</h1>
        <p>{product.price}</p>
    </div>
    <div class="action-container">
        <button class="edit">Edit</button>
        <button class="remove">Remove</button>
    </div>
</div>

<style>
    .product {
        display: flex;
        align-items: center;
        border: 1px solid black;
        padding: 1rem;
        margin: 1rem;
    }

    img {
        width: 100px;
        height: 100px;
    }

    .info-container {
        flex: 1;
        padding: 0 1rem;
    }

    .edit {
        background-color: green;
        color: white;
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    .remove {
        background-color: red;
        color: white;
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
</style>