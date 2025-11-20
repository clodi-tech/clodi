"use client";

import { useActionState } from "react";
import { submitEmail } from "@/lib/actions";
import Form from "next/form";

export default function EmailForm() {
  const [state, formAction, pending] = useActionState(submitEmail, null);

  return (
    <Form action={formAction} className="flex flex-col items-center gap-2">
      <label className="flex flex-col text-light">
        ti ricontatto io tramite email
        <input
          type="email"
          name="email"
          required
          className="rounded border"
          disabled={pending}
        />
      </label>
      <button disabled={pending} className="rounded border">
        {pending ? "invio..." : "invia"}
      </button>
      {state?.success && (
        <p className="text-sm text-light">ti ricontatto presto!</p>
      )}
    </Form>
  );
}
