"use server";

import { Resend } from "resend";

export async function getEmail(prevState: string, formData: FormData) {
  const email = formData.get("email");

  if (!email) {
    return "invalid email";
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const { error: contactError } = await resend.contacts.create({
    email: email as string,
    audienceId: process.env.RESEND_AUDIENCE_ID as string,
  });

  if (contactError) {
    return contactError.message;
  }

  const { error: emailError } = await resend.emails.send({
    from: "ciao@clodi.tech",
    to: email as string,
    subject: "Clodi | New Prospect",
    text: `You have a new prospect: ${email}`,
  });

  if (emailError) {
    return emailError.message;
  }

  return "ok";
}
