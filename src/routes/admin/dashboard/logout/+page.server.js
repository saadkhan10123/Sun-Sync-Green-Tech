import { redirect } from '$app/navigation';
import { getAuth, signOut } from 'firebase/auth';
import { initFirebase } from '$lib/initFirebase';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    try {
        const app = await initFirebase();
        const auth = getAuth(app);
        await signOut(auth);
    }
    catch (error) {
        console.log(error);
    }
    return redirect(302, '/admin/login');
};