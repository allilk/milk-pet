/** @type {import('./$types').PageLoad} */
import { modList } from "../../stores";
import { get } from "svelte/store";
const endpoint = "https://www.keristero.xyz";

export async function load({ fetch, params }) {
    const mod_list = get(modList);

    if (Object.keys(mod_list).length === 0) {
        const response = await fetch(`${endpoint}/mod_list`);
        const data = await response.json();

        if (data) modList.set(data);
    }

    return mod_list;
}
