"use server";

export async function getEmail(prevState: any, formData: FormData) {
  const email = formData.get("email");
  console.log(email);
  return "ok";
}
