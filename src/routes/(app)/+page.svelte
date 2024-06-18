<script>
    import Carousel from 'svelte-carousel'

    // get placeholder images

    const images = [
        {src: 'https://via.placeholder.com/150'},
        {src: 'https://via.placeholder.com/150'},
        {src: 'https://via.placeholder.com/150'},
    ]

    let carousel;

    const next = () => {
        carousel.next();
    }

    const prev = () => {
        carousel.prev();
    }
</script>

<main>
    <Carousel bind:this={carousel}>
        {#each images as image}
            <img src={image.src} alt="placeholder image">
        {/each}
    </Carousel>
    <button on:click={prev}>Previous</button>
    <button on:click={next}>Next</button>
</main>