import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { _globalVisits } from './+page.server';

export const GET: RequestHandler = async ({  }) => {

    return json({ globalVisits: _globalVisits });
};