import { writable } from "svelte/store";

export const colorPalette = writable({
    primary: '#323136',
    secondary: '#72d15c',
    tertiary: '#000',
});