"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Menu() {
  const pathname = usePathname();

  return (
    <div className="flex justify-center gap-4">
      <Link href="/" className={pathname === '/' ? 'text-white underline underline-offset-4' : ''}>hello</Link>
      <Link href="/systems" className={pathname === '/systems' ? 'text-white' : ''}>systems</Link>
      <Link href="/notes" className={pathname === '/notes' ? 'text-white' : ''}>notes</Link>
    </div>
  );
}
