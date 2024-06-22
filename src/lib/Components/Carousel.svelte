<script>
    export let slides = [];
    
    let currSlide = 0;
    let interval = setInterval(next, 5000);

    function next() {
        if (currSlide < slides.length - 1) {
            currSlide++;
        } else if (currSlide === slides.length - 1) {
            currSlide = 0;
        }
        clearInterval(interval);
        interval = setInterval(next, 5000);
    }

    function prev() {
        if (currSlide > 0) {
            currSlide--;
        } else if (currSlide === 0) {
            currSlide = slides.length - 1;
        }
        clearInterval(interval);
        interval = setInterval(next, 5000);
    }

</script>

<div class="carousel">
    <button on:click={prev}>&lt;</button>
    <button on:click={next}>&gt;</button>

    {#each slides as {slide: Slide, props}, i}
        <div style:left={100 * i - 100 * currSlide + '%'}>
            <svelte:component this={Slide} {...props} />
        </div>
    {/each}    
</div>

<style>
    .carousel {
        height: 100%;
        width: 100%;
        position: relative;
        display: flex;
        overflow-x: hidden;
    }

    .carousel > div {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px solid black;
        position: absolute;
        top: 0;
        box-sizing: border-box;
        transition: left 0.5s;
    }

    .carousel > button:nth-child(1) {
        left: 0;
    }

    .carousel > button:nth-child(2) {
        right: 0;
    }

    .carousel > button {
        z-index: 5;
        position: absolute;
        top: 50%;
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
        border: none;
        padding: 0.5rem;
        cursor: pointer;
        height: 100%;
        box-sizing: border-box;
        transform: translateY(-50%);
        font-size: 5svh;
    }

    .carousel > button:hover {
        background-color: rgba(0, 0, 0, 0.8);
    }
</style>