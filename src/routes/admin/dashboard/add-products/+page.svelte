<script>
    /** @type {import('./$types').PageData} */
    export let data;

    import { enhance } from '$app/forms'

    let inputs = [''];

    let productImage, fileinput;
    
    function handleInput(index, event) {
        inputs[index] = event.target.value;
    
        if (index === inputs.length - 1) {
        inputs = [...inputs, ''];
        }
    }

    const handleBlur = (index) => {
        if (inputs[index] === '' && inputs.length > 1 && index !== inputs.length - 1) {
        inputs = inputs.filter((_, i) => i !== index);
        }
    };

    const onFileSelected =(e)=>{
        let image = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = e => {
            productImage = e.target.result
        };
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
        fileinput.click();
        }
    };
</script>

<div class="add-product">
    <div class="upload-image" on:click={()=>{fileinput.click();}} on:keydown={handleKeyDown} role="button" tabindex="0">      
        {#if productImage}
            <img class= "product-image" src={productImage} alt="d" />
        {:else}
            <img class= "product-image placeholder-image" src="/Upload Image.webp" alt="" /> 
            <p>Choose image</p>
        {/if}
        <input style="display:none" type="file" accept=".jpg, .jpeg, .png" on:change={(e)=>onFileSelected(e)} bind:this={fileinput} >
    </div>
    <form method="POST" enctype="multipart/form-data" use:enhance={ ( { formData, submitter, cancel }) => {
        if (!productImage) {
            alert('Please upload an image');
            cancel();
            return;
        }
        submitter.disabled = true;

        // remove empty strings
        inputs = inputs.filter(input => input.trim() !== '');
        const description = JSON.stringify(inputs);

        let mimeType = productImage.split(';')[0].split(':')[1];

        let binary = atob(productImage.split(',')[1]); // decode base64
        let array = [];

        for (let i = 0; i < binary.length; i++) {
            array.push(binary.charCodeAt(i));
        }
        let blob = new Blob([new Uint8Array(array)], {type: mimeType});

        let file = new File([blob], "filename", {type: mimeType});
        formData.append('image', file);
        formData.append('description', description);
    }}>
        <div class="product-name">
            <label for="name">Product Name:</label>
            <input type="text" name="name" placeholder="Product Name" required>
        </div>
        <label for="price">Price:</label>
        <input type="number" name="price" placeholder="Price" required>
        <label for="description">Description:</label>
        <ul>
              {#each inputs as input, index (index)}
                <li class:last = {index === inputs.length - 1}>
                    <input type="text" 
                        bind:value={inputs[index]} 
                        on:input={(event) => handleInput(index, event)} 
                        on:blur={(event) => handleBlur(index)} 
                        />
                </li>
              {/each}
        </ul>
        <label for="category">Category:</label>
        <select name="category" required>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="food">Food</option>
            <option value="books">Books</option>
        </select>
        <button type="submit">Add Product</button>
    </form>
</div>


<style>
    form {
        flex-direction: column;
        padding: 2rem;
        width: 100%;
    }

    .product-name > label {
        display: block;
        margin: 0.5rem 0;
        font-size: large;
        font-weight: bold;
    }

    .product-name > input {
        display: block;
        padding: 0.5rem;
        margin: 0.5rem 0;
        box-sizing: border-box;
    }

    form > label {
        display: block;
        margin: 0.5rem 0;
        font-size: large;
        font-weight: bold;
    }

    form > button {
        display: block;
        margin: 0.5rem 0;
        padding: 0.5rem;
        background-color: green;
        color: white;
        border: none;
        border-radius: 0.5rem;
        cursor: pointer;

    }

    form > button:disabled {
        background-color: rgba(128, 128, 128, 0.5);
        cursor: not-allowed;

    }

    li > input {
        display: block;
        padding: 0.5rem;
        margin: 0.5rem 0;
        border: 2px solid black;
        box-sizing: border-box;
    }

    input {
        width: 100%;
        padding: 0.5rem;
        margin: 0.5rem 0;
        border: 2px solid black;
    }

    input[type="number"] {
        width: 40%;
    }

    select {
        width: 100%;
        padding: 0.5rem;
        margin: 0.5rem 0;
        border: 2px solid black;
    }

    .add-product {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 2rem;
    }

    .last {
        color: rgba(128, 128, 128, 0.5);
    }

    .last > input {
        border: 2px dashed rgba(128, 128, 128, 0.5);
    }

    .last > input:focus {
        border: 2px solid black;
    }

    .upload-image {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 5px solid rgba(128, 128, 128, 0.5);
        border-radius: 5rem;
        width: 80%;
        overflow: hidden;
        position: relative;
    }

    .placeholder-image {
        opacity: 0.3;
    }

    .upload-image > p {
        color: rgba(100, 100, 100, 0.5);
        position: absolute;
        font-size: 3rem;
    }

	.product-image{
		display:flex;
        width: 100%;
        object-fit: contain;
        aspect-ratio: 16/9;
	}
</style>
