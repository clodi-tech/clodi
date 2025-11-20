"use client";

import { useActionState } from "react";
import { submitEmail } from "@/lib/actions";
import Form from "next/form";

export default function EmailForm() {
  const [state, formAction, pending] = useActionState(submitEmail, null);

  return (
    <Form
      action={formAction}
      className="flex flex-col items-center gap-2 w-full"
    >
      {state && state?.success ? (
        <p className="text-sm text-light">ti ricontatto presto!</p>
      ) : (
        <>
          <label className="flex flex-col text-center text-light w-full">
            lasciami la tua email, ti ricontatto io
            <input
              type="email"
              name="email"
              required
              className="px-2 py-1 rounded border focus:outline-none focus:ring-2 focus:ring-mid"
              disabled={pending}
              placeholder="inserisci la tua email"
            />
          </label>
          <button
            disabled={pending}
            className="px-2 py-1 text-sm rounded border bg-foreground text-background hover:bg-light transition-colors disabled:opacity-50"
          >
            {pending ? "invio..." : "invia"}
          </button>
        </>
      )}
    </Form>
  );
}
