/** @type {import('./$types').PageLoad} */
import { modList } from "../../stores";
import { get } from "svelte/store";
const endpoint = "https://www.keristero.xyz";

export const load = async ({ fetch }) =>
    new Promise(async (resolve, reject) => {
        try {
            const mod_list = get(modList);

            if (Object.keys(mod_list).length === 0) {
                const response = await fetch(`${endpoint}/mod_list`);

                const data = await response.json();

                if (data) modList.set(data);

                return resolve(data);
            }

            return resolve(mod_list);
        } catch (err) {
            return reject(err);
        }
    });
