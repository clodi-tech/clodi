import Image from "next/image";
import about from "@/public/about.jpeg";
import icon from "@/public/icon.svg";
import MyTitle from "@/lib/components/my-title";
import Projects from "@/lib/components/projects";
import EmailForm from "@/lib/components/email-form";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen w-full max-w-lg mx-auto p-10 gap-10">
      <header className="flex flex-col items-center gap-3 w-full">
        <Image
          src={about}
          alt="Claudio Callegari"
          width={80}
          height={80}
          className="rounded-full"
        />
        <div className="flex flex-col items-center gap-0.5">
          <MyTitle first="callegari" second="claudio" as="h1" />
          <p className="text-light font-medium">freelance solution architect</p>
          <p className="text-sm text-mid font-normal">varzi, pianeta terra</p>
        </div>
      </header>
      <div className="flex flex-col items-center gap-2">
        <MyTitle first="miei" second="progetti" as="h2" />
        <Projects />
      </div>
      <div className="flex flex-col items-center gap-1 w-full">
        <Image src={icon} alt="Heart Handshake Icon" width={24} height={24} />
        <MyTitle first="il" second="prossimo" as="h2" />
        <p className="text-mid font-semibold">potrebbe essere il tuo!</p>
        <EmailForm />
      </div>
      <div className="flex items-center gap-4">
        <a
          href="https://instagram.com/clodi_tech"
          target="_blank"
          rel="noopener"
          className="text-mid text-sm font-medium hover:text-light transition-colors"
        >
          instagram
        </a>
        <a
          href="https://www.linkedin.com/in/claudio-calle/"
          target="_blank"
          rel="noopener"
          className="text-mid text-sm font-medium hover:text-light transition-colors"
        >
          linkedin
        </a>
      </div>
    </main>
  );
}
