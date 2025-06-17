"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Form from "next/form";
import { getEmail } from "@/lib/actions";
import { useActionState } from "react";

export default function FormEmail() {
  const [state, formAction] = useActionState(getEmail, null);

  return (
    <Form action={formAction} className="flex gap-2 w-full max-w-xs">
      <Input
        type="email"
        placeholder="Your email"
        name="email"
        required
        className="flex-1"
      />
      <Button type="submit">Send</Button>
      {state && state === "ok" && <p>Email sent</p>}
    </Form>
  );
}
