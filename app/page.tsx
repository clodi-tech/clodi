import Image from "next/image";
import logo from "@/public/logo.png";
import about from "@/public/about.jpeg";
import icon from "@/public/icon.svg";
import MyTitle from "@/lib/components/my-title";
import Project from "@/lib/components/project";
import EmailForm from "@/lib/components/email-form";
import { projects } from "@/lib/const";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen p-10 gap-10">
      <Image src={logo} alt="Clodi Logo" width={40} />
      <div className="flex flex-col items-center gap-1">
        <div className="flex items-center gap-2">
          <MyTitle first="HEY" second="CIAO" as="h1" />
          <Image
            src={about}
            alt="Clodi About"
            width={50}
            className="rounded border-3 border-dark"
          />
          <MyTitle first="SONO" second="CLODI" as="h1" />
        </div>
        <p className="text-sm text-light">
          creo progetti tech su misura, con cura.
        </p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <MyTitle first="MIEI" second="PROGETTI" as="h2" />
        {projects.map((project) => (
          <Project
            key={project.title}
            logo={project.logo}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
      <div className="flex flex-col items-center gap-1">
        <Image src={icon} alt="Heart Handshake Icon" width={24} height={24} />
        <p className="text-mid">il prossimo potrebbe essere il tuo.</p>
        <EmailForm />
      </div>
    </main>
  );
}
