import type { PageServerLoad } from "./$types";

let globalVisits = 0;
let uniqueVisits = 0;
let localVisits: Record<string,number> = {};

export const load = (async ({ cookies }) => {
    globalVisits++;

    // Cookie - Håll reda på om användaren har besökt hemsidan tidigare
    let id = cookies.get('id')

    if (id == undefined) {
        uniqueVisits++;
        cookies.set('id', uniqueVisits.toString(), { path: '/' , 
            httpOnly: false,
            secure: false
        })
        id = uniqueVisits.toString();
    } 

    if (localVisits[id] == undefined) {
        localVisits[id] = 0;
    }
    localVisits[id]++;

    return {globalVisits, id, yourVisits: localVisits[id]};
}) satisfies PageServerLoad;