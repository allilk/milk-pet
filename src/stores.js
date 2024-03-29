import { writable } from "svelte/store";
import { browser } from "$app/environment";

export const listOfMods = writable([]);

export const chipDesign = writable(
    (browser && localStorage.getItem("chipDesign")) || "default"
);

export const animations = writable(
    (browser && localStorage.getItem("animations")) === "true" || false
);

const bottomScrnDetail = browser && localStorage.getItem("bottomScreenDetails");

export const bottomScreenDetails = writable(
    bottomScrnDetail === "true" || bottomScrnDetail === null ? true : false
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
