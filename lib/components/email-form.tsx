"use client";

import { useActionState } from "react";
import { submitEmail } from "@/lib/actions";

export default function EmailForm() {
  const [state, formAction, pending] = useActionState(submitEmail, null);

  return (
    <form action={formAction} className="flex flex-col items-center gap-2">
      <label htmlFor="email" className="text-light">
        ti ricontatto tramite email
      </label>
      <input
        id="email"
        type="email"
        name="email"
        required
        className="rounded border"
        disabled={pending}
      />
      <button disabled={pending} className="rounded border">
        {pending ? "invio..." : "invia"}
      </button>
      {state?.success && <p className="text-sm text-light">{state.message}</p>}
    </form>
  );
}
