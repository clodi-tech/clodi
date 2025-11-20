"use server";

export async function submitEmail(
  prevState: { success: boolean; message: string } | null,
  formData: FormData
) {
  const email = formData.get("email");

  console.log("Email submitted:", email);

  // One second delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return { success: true, message: "ok" };
}
