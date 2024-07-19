import { redirect } from "@sveltejs/kit";

export function load() {
  redirect(302, "https://discord.com/users/901872201454747678"); // needs `throw` in v1
}
