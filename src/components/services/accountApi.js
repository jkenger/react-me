import supabase from "./supabase";

export async function getAccounts() {
  let { data: Accounts, error } = await supabase.from("Accounts").select("*");
  return { Accounts, error };
}
