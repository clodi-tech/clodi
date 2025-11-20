import Image from "next/image";
import type { Project } from "@/lib/types";

export default function Project({ logo, title, description }: Project) {
  return (
    <div className="flex flex-col items-center gap-2">
      <Image
        src={logo}
        alt={title}
        width={80}
        height={80}
        className="object-contain"
      />
      <h3 className="uppercase text-light font-bold">{title}</h3>
      <p className="text-sm text-mid">{description}</p>
    </div>
  );
}
