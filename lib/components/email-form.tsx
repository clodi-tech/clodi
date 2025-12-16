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
        <p className="text-light">super, ti scrivo presto!</p>
      ) : (
        <label className="flex flex-col items-center gap-2 w-full text-center text-light font-medium">
          per training - workshops - consulenza - soluzioni custom
          <br />
          lasciami la tua email, ti contatto io
          <div className="flex gap-2 w-full">
            <input
              type="email"
              name="email"
              required
              className="flex-1 px-2 py-1 rounded border focus:outline-none focus:ring-2 focus:ring-mid"
              disabled={pending}
              placeholder="inserisci la tua email"
            />
            <button
              disabled={pending}
              className="px-4 py-1 text-sm rounded border border-mid bg-foreground text-background font-bold hover:bg-light transition-colors disabled:opacity-50 whitespace-nowrap"
            >
              invia
            </button>
          </div>
        </label>
      )}
    </Form>
  );
}
