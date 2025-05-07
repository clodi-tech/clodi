import Logo from "@/public/logo.png";
import Image from "next/image";
import { Links } from "@/lib/const";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center p-20 gap-10">
      <Image src={Logo} alt="Logo" width={50} />
      <p>currently rebuilding this website, pls come back soon.</p>
      <p>
        meanwhile, let's connect on{" "}
        <a href={Links.linkedin} target="_blank" rel="noopener">
          <span className="text-blue-500 underline underline-offset-2">
            linkedin
          </span>
        </a>
      </p>
    </main>
  );
}
