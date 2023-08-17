import { supabaseUrl } from "./supabase";

export function createImageLink(name) {
  const imageName = `${Math.random()}-${name}`.replaceAll(
    ["/", " ", "(", ")"],
    ""
  );

  const imagePath = `${supabaseUrl}/storage/v1/object/public/avatars/${imageName}`;

  return { imagePath, imageName };
}
