<script>
    /** @type {import('./$types').PageData} */
    export let data;

    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';

    onMount(() => {
        goto('admin/dashboard/');
    });

</script>
