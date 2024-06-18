/** @type {import('./$types').PageServerLoad} */
import { initFirebase } from '$lib/initFirebase';
import { redirect, fail } from '@sveltejs/kit';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const app = await initFirebase();
const auth = getAuth(app);

export async function load() {
    if(auth.currentUser) {
        console.log('User already logged in');
        return redirect(302, '/admin/dashboard');
    }
};

export const actions = {
    login: async ({ request }) => {

        let data = await request.formData();
        let username = data.get('username');
        let password = data.get('password');
        
        try {
            await signInWithEmailAndPassword(auth, username, password);
            console.log('User logged in');
            redirect(302, '/admin/dashboard');
        } catch (error) {
            console.log(error);
            if (error.code === 'auth/user-not-found') {
                return fail('Invalid username or password');
            } else {
                return fail('An error occurred');
            }
        }
    }
}