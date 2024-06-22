<script>
    import Carousel from '$lib/Components/Carousel.svelte';
    import CarouselItem from '$lib/Components/CarouselItem.svelte';

    // get placeholder images

    const slides = [
        { src: 'https://via.placeholder.com/500' },
        { src: 'https://via.placeholder.com/500' },
        { src: 'https://via.placeholder.com/500' }
    ]

    slides.forEach(slide => {
        slide.slide = CarouselItem;
        slide.props = { src: slide.src };
    });


</script>

<main>
    <div class="carousel">
        <Carousel { slides }/>
    </div>
</main>

<style>
    .carousel {
        grid-column: span 12;
    }

</style>