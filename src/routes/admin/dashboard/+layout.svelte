<script>
    import SideBar from '$lib/Admin/SideBar.svelte';

    const options = [
        { name: 'Home', link: '/admin/dashboard/home' },
        { name: 'Products', link: '/admin/dashboard/products' },
        { name: 'Add Products', link: '/admin/dashboard/add-products'},
        { name: 'Settings', link: '/admin/dashboard/settings' }
    ];

    let active = 'Home';

    const handleActive = (e) => {
        active = e.detail.option.name;
    }
</script>

<main>
    <SideBar { options } { active } on:active={handleActive}/>
    <div class="slot-container">
        <slot />
    </div>
</main>

<style>
    .slot-container {
        grid-column: span 9;
    }
</style>
