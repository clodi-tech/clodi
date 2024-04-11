"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Menu() {
  const pathname = usePathname();
  const links = [
    { link: "/", text: "hello" },
    { link: "/systems", text: "systems" },
    { link: "/notes", text: "notes" },
  ];

  return (
    <div className="flex justify-center gap-4">
      {links.map(({ link, text }, index) => (
        <Link key={index} href={link} 
          className={(pathname === link && link === '/') || pathname.includes(text) ? 'text-white underline underline-offset-4' : ''}>
          {text}
        </Link>
      ))}
    </div>
  );
}
