<script>
    export let options;
    export let active;

    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();
    const setActive = (option) => {
        dispatch("active", { option });
    }
</script>

<div class="options-bar">
    {#each options as option}
        <a class:active = {active === option.name} class="option" href={option.link} on:click={setActive(option)}>{option.name}</a>
    {/each}
</div>

<style>
    .options-bar {
        display: flex;
        flex-direction: column;
        justify-content: start;
        gap: 1px;
        background-color: grey;
        height: 100%;
        box-sizing: border-box;
        padding-top: 15px;
        grid-column: span 3;
    }
    

    .option {
        display: block;
        text-decoration: none;
        color: white;
        font-size: 1.2em;
        padding: 1em 1em;
        box-sizing: border-box;
        width: 100%;
        transition: all 0.2s;
    }

    .options-bar > a:hover {
        color: grey;
        background-color: white;
    }

    .active {
        color: grey;
        background-color: white;
    }

</style>