"use server";

export async function submitEmail(
  prevState: { success: boolean } | null,
  formData: FormData
) {
  const email = formData.get("email");

  const message = `Clodi Tech | new prospect: ${email}`;

  const response = await fetch(
    `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text: message,
      }),
    }
  );

  if (!response.ok) {
    console.error(response);
    return { success: false };
  }

  return { success: true };
}
