import { createImageLink } from "./createImageLink";
import supabase, { supabaseUrl } from "./supabase";

// Api services
export async function uploadImage(file, id, imageName) {
  const { error: storageError } = await supabase.storage
    .from("avatars")
    .upload(imageName, file);
  if (storageError) {
    const { error } = await supabase.from("Accounts").delete().eq("id", id);
    if (error)
      throw new Error("Account could not be created and could not be uploaded");
  }

  return storageError;
}

export async function deleteImage(imageName) {
  if (imageName) {
    const { error: storageError } = await supabase.storage
      .from("avatars")
      .remove([`${imageName}`]);
    return storageError;
  }
}

// Api functions
export async function getAccounts() {
  let { data: Accounts, error } = await supabase.from("Accounts").select("*");
  return { Accounts, error };
}

export async function createAccount(data) {
  const { imagePath, imageName } = createImageLink(data.avatar[0]?.name);
  const { data: account, error } = await supabase
    .from("Accounts")
    .insert([{ ...data, avatar: imagePath, avatar_name: imageName }])
    .select();
  console.log(error);

  if (imageName) {
    await uploadImage(data.avatar[0], account[0].id, imageName);
  }

  if (error) return error;
  return account;
}

export async function updateAccount(data, id) {
  const { imagePath, imageName } = createImageLink(data.avatar[0]?.name);
  const { error } = await supabase
    .from("Accounts")
    .update({ ...data, avatar: imagePath, avatar_name: imageName })
    .eq("id", id)
    .select();

  if (imageName) {
    await uploadImage(data.avatar[0], id, imageName);
  }

  return error;
}

export async function deleteAccount({ id, avatar_name }) {
  await deleteImage(avatar_name);
  let { error } = await supabase.from("Accounts").delete().eq("id", id);
  return error;
}

export async function duplicateAccount(data) {
  const { data: account, error } = await supabase
    .from("Accounts")
    .insert([
      {
        name: `Copy of ${data.name}`,
        age: data.age,
        education: data.education,
        course: data.course,
        avatar: data.avatar,
      },
    ])
    .select();

  console.log(error);
  return { error, account };
}
