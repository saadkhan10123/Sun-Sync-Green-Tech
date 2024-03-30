<script>
    import { enhance } from '$app/forms'

    /** @type {import('./$types').PageData} */
    export let data;

    	/** @type {import('./$types').ActionData} */
	export let form;

    $: console.log(form);

</script>

<main>
    <div class="login-form">
        <h1>Admin Login</h1>
        <form method="POST" action="?/login" use:enhance>
            <label for="username">Username:</label>
            <input type="text" name="username" placeholder="username" required>
            <label for="password">Password:</label>
            <input type="password" name="password" placeholder="password" required>
            {#if form?.incorrect}
                <p class="error">Incorrect username or password</p>
            {/if}
            <button type="submit">Login</button>
        </form>
    </div>
</main>

<style>
    form {
        display: flex;
        gap: 1rem;
        flex-direction: column;
    }

    input, button {
        padding: 0.5rem;
    }

    button {
        background-color: #333;
        color: white;
        border: none;
    }

    .login-form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        max-width: 300px;
        margin: 0 auto;
        border: 1px solid black;
        padding: 1rem;
    }

    main {
        display: grid;
        place-items: center;
    }

    .error {
        color: red;
        margin: none;
    }
</style>