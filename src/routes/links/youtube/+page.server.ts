import { redirect } from "@sveltejs/kit";

export function load() {
  redirect(302, "https://youtube.com/@fluntyxyz"); // needs `throw` in v1
}
