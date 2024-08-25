import { error, redirect } from "@sveltejs/kit";
import socials from "$lib/socials.json";

export function load({ params }) {
  const platform = params.links;
  const social = socials.find((item) => item.platformName.toLowerCase() === platform.toLowerCase());

  if (social && social.link) {
    throw redirect(302, social.link);
  } else {
    throw error(404, "Not Found");
  }
}