import { error, redirect } from "@sveltejs/kit";
import { api } from "../../api";

export async function load({ params }) {
  const platform = params.links;

  try {
    // Fetch profiles using api.get
    const response = await api.get("profiles");

    const socials: { platformName: string; link?: string }[] = response.data.data;

    const social = socials.find(
      (item) => item.platformName.toLowerCase() === platform.toLowerCase()
    );

    if (social && social.link) {
      throw redirect(302, social.link);
    } else {
      throw error(404, "Not Found");
    }
  } catch (err) {
    if (err && err.status === 302 && err.location) {
      throw err;
    }

    console.error("Unexpected error:", err);
    throw error(500, "Internal Server Error");
  }
}