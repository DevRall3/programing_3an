import type { PageServerLoad } from "./$types";

export let _globalVisits = 0;
let uniqueVisits = 0;
let localVisits: Record<string,number> = {};

export const load = (async ({ cookies }) => {
    _globalVisits++;

    // Cookie - Håll reda på om användaren har besökt hemsidan tidigare
    let id = cookies.get('id')

    if (id == undefined) {
        uniqueVisits++;
        cookies.set('id', uniqueVisits.toString(), { 
            path: '/' , 
            httpOnly: true,
            secure: false,
            sameSite: 'lax',
            // expires: new Date(2024, 10, 27)
        })
        id = uniqueVisits.toString();
    }

    if (localVisits[id] == undefined) {
        localVisits[id] = 0;
    }
    localVisits[id]++;

    return {globalVisits: _globalVisits, id, yourVisits: localVisits[id]};
}) satisfies PageServerLoad;