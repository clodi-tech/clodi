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
          className="px-2 py-1 rounded border focus:outline-none focus:ring-2 focus:ring-mid"
          disabled={pending}
        />
      </label>
      <button
        disabled={pending}
        className="px-2 py-1 text-sm rounded border bg-foreground text-background w-full hover:bg-light transition-colors disabled:opacity-50"
      >
        {pending ? "invio..." : "invia"}
      </button>
      {state?.success && (
        <p className="text-sm text-light">ti ricontatto presto!</p>
      )}
    </Form>
  );
}
