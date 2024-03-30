/** @type {import('./$types').PageServerLoad} */

import { fail } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';

export async function load() {
    return {};
};

export const actions = {
    login: async ({ request, cookies }) => {

        let data = await request.formData();
        let username = data.get('username');
        let password = data.get('password');

        if (username === 'admin' && password === 'admin') {
            cookies.set("auth", "regularusertoken", {
                path: '/',
                httpOnly: true,
                sameSite: 'strict',
                maxAge: 60
            });

            const chocolatechip = cookies.get('auth');
            console.log(chocolatechip);

            redirect(302, '/admin/dashboard');
        } else {
            console.log('login failed');
            return fail(400, { username, incorrect: true})
        }
    }
}