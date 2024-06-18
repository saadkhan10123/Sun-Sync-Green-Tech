<script>
    /** @type {import('./$types').PageData} */
    export let data;

    import { colorPalette } from '$lib/Stores/colorPalette';

    let appliances = [
        { name: 'Light', power: 60, hours: 4 },
        { name: 'TV', power: 100, hours: 6 },
        { name: 'Computer', power: 200, hours: 8 }
    ];

    const handleSubmit = (event) => {
        event.preventDefault();
        const appliance = event.target.appliance.value;
        const power = event.target.power.value;
        const hours = event.target.hours.value;
        const energy = power * hours;
        console.log(appliances);
        appliances = [...appliances, { name: appliance, power, hours }];
    }

    const applianceType = [
        {id: 1, name: 'Light', power: 60},
        {id: 2, name: 'TV', power: 100},
        {id: 3, name: 'Computer', power: 200}
    ]

    let selectedType = applianceType[0].id;

    const getAppliance = (id) => {
        return applianceType.find(type => type.id === id);
    }
</script>

<h1>Solar Price Calculator</h1>
<!-- Make a calculator that takes in input of home appliances and outputs an estimate power consumption -->

<form style:background-color={$colorPalette.secondary} action="submit" on:submit={handleSubmit}>
    <label for="appliance">Appliance</label>
    <select id="appliance" name="appliance" required bind:value={selectedType}>
        {#each applianceType as type}
            <option value={type.id}>{type.name}</option>
        {/each}
    </select>
    <p>Power (W)</p>
    <p>{getAppliance(selectedType).power}</p>
    <label for="quantity">Quantity</label>
    <input type="number" id="quantity" name="quantity" required>
    <label for="hours">Hours</label>
    <input type="number" id="hours" name="hours" required>
    <button type="submit">Add</button>
</form>

<table>
    <thead>
        <tr>
            <th>Appliance</th>
            <th>Power (W)</th>
            <th>Hours</th>
            <th>Energy (Wh)</th>
        </tr>
    </thead>
    <tbody>
        {#each appliances as appliance}
            <tr>
                <td>{appliance.name}</td>
                <td>{appliance.power}</td>
                <td>{appliance.hours}</td>
                <td>{appliance.power * appliance.hours}</td>
            </tr>
        {/each}
    </tbody>

</table>

<style>
    table {
        width: 100%;
    }

    th, td {
        border: 1px solid black;
        padding: 0.5rem;
    }
</style>