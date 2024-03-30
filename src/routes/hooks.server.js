import { Handle } from "@sveltejs/kit";

export const handle = async ({ event, resolve }) => {
    const response = await resolve(event);

    console.log(response)

    return response;
}