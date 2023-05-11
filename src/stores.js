import { writable } from "svelte/store";
import { browser } from "$app/environment";

export const modList = writable({});

export const chipDesign = writable(
    (browser && localStorage.getItem("chipDesign")) || "default"
);

export const animations = writable(
    (browser && localStorage.getItem("animations")) === "true" || false
);

export const bottomScreenDetails = writable(
    (browser && localStorage.getItem("bottomScreenDetails")) === "true"
);

chipDesign.subscribe((value) => {
    if (browser) return (localStorage.chipDesign = value);
});

animations.subscribe((value) => {
    if (browser) return (localStorage.animations = value);
});

bottomScreenDetails.subscribe((value) => {
    if (browser) return (localStorage.bottomScreenDetails = value);
});
