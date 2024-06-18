import { handle, redirect } from "@sveltejs/kit"
import { getAuth } from "firebase/auth"
import { initFirebase } from "$lib/initFirebase"

export async function handle({ event, resolve }) {
  const response = await resolve(event)
  const app = await initFirebase()
  const auth = getAuth(app)

  if (event.url.pathname.startsWith("/admin/dashboard")) {
    // Check if the user is authenticated
    const user = auth.currentUser
    if (!user) {
      return redirect(302, "/admin/login")
    }
  }


  return response
}
