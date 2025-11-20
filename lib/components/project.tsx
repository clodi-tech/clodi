import type { Project } from "@/lib/types";

export default function Project({ title, description }: Project) {
  return (
    <div className="flex flex-col w-full">
      <h3 className="uppercase text-light font-bold">{title}</h3>
      <p className="text-sm text-mid">{description}</p>
    </div>
  );
}
