import Image from "next/image";

export default function Footer() {
  return (
    <footer className="p-4 gap-2 flex flex-col justify-center items-center">
      <a href="/resume.pdf" target="_blank" rel="noopener">
        <div className="flex justify-center items-center gap-2">
          <Image src="/download.svg" alt="download" width={15} height={15} />
          <p className="text-white">resume</p>
        </div>
      </a>
      <p className="cursor-help">© 2092</p>
    </footer>
  );
}
