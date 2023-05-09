import { writable } from "svelte/store";
import { browser } from "$app/environment";

export const modList = writable({});

export const chipDesign = writable(
    (browser && localStorage.getItem("chipDesign")) || "default"
);

chipDesign.subscribe((value) => {
    if (browser) return (localStorage.chipDesign = value);
});
