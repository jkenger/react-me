import supabase, { supabaseUrl } from "./supabase";

export async function getAccounts() {
  let { data: Accounts, error } = await supabase.from("Accounts").select("*");
  return { Accounts, error };
}

export async function createAccount(data) {
  const imageName = `${Math.random()}-${data.avatar[0]?.name}`.replaceAll(
    ["/", " "],
    ""
  );

  const imagePath = `${supabaseUrl}/storage/v1/object/public/avatars/${imageName}`;

  const { data: account, error } = await supabase
    .from("Accounts")
    .insert([{ ...data, avatar: imagePath }])
    .select();
  console.log(error);

  if (imageName) {
    const { error: storageError } = await supabase.storage
      .from("avatars")
      .upload(imageName, data.avatar[0]);
    if (storageError) {
      const { error } = await supabase
        .from("Accounts")
        .delete()
        .eq("id", account[0].id);
      console.error(error);
      throw new Error("Account could not be created and could not be uploaded");
    }
  }

  if (error) console.log(error);
  console.log(account);
}

export async function updateAccount(data, id) {
  const { error } = await supabase
    .from("Accounts")
    .update({ ...data })
    .eq("id", id)
    .select();

  return error;
}

export async function deleteAccount(id) {
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
