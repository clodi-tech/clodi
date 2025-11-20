import Image from "next/image";
import logo from "@/public/logo.png";
import about from "@/public/about.jpeg";
import MyTitle from "@/lib/components/my-title";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen p-10 gap-10">
      <Image src={logo} alt="Clodi Logo" width={40} />
      <div className="flex flex-col items-center gap-1">
        <div className="flex items-center gap-2">
          <MyTitle first="HEY" second="CIAO" />
          <Image
            src={about}
            alt="Clodi About"
            width={50}
            className="rounded border-3 border-dark"
          />
          <MyTitle first="SONO" second="CLODI" />
        </div>
        <p className="text-sm text-light">
          creo progetti tech su misura, con cura.
        </p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div>MIEIPROGETTI</div>
        <div className="flex flex-col items-center">
          <div>progetto 1</div>
          <div>ti racconto il progetto 1</div>
        </div>
        <div className="flex flex-col items-center">
          <div>progetto 2</div>
          <div>ti racconto il progetto 2</div>
        </div>
        <div className="flex flex-col items-center">
          <div>progetto 3</div>
          <div>ti racconto il progetto 3</div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1">
        <div>icona</div>
        <div>il prossimo potrebbe essere il tuo</div>
        <div>input email</div>
        <div>button</div>
      </div>
    </main>
  );
}
