import Image from "next/image";
import logo from "@/public/logo.png";
import about from "@/public/about.jpeg";
import icon from "@/public/icon.svg";
import MyTitle from "@/lib/components/my-title";
import Projects from "@/lib/components/projects";
import EmailForm from "@/lib/components/email-form";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen w-full max-w-lg mx-auto p-10 gap-10">
      <Image src={logo} alt="Clodi Logo" width={40} />
      <div className="flex flex-col items-center gap-1">
        <div className="flex items-end gap-2">
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
        <Projects />
      </div>
      <div className="flex flex-col items-center gap-1 w-full">
        <Image src={icon} alt="Heart Handshake Icon" width={24} height={24} />
        <MyTitle first="IL" second="PROSSIMO" as="h2" />
        <p className="text-light">potrebbe essere il tuo!</p>
        <p className="text-mid">
          per training - workshops - consulenza - soluzioni custom
        </p>
        <EmailForm />
      </div>
    </main>
  );
}
