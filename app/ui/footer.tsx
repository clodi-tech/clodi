import Image from "next/image";

const icons = [
  {
    src: "/instagram.svg",
    alt: "instagram",
    href: "https://instagram.com/clodi_tech",
  },
  {
    src: "/linkedin.svg",
    alt: "linkedin",
    href: "https://www.linkedin.com/in/claudio-calle/",
  },
];

function Icon({ src, alt, href }: { src: string; alt: string; href: string }) {
  return (
    <div className="transition-all duration-300 ease-in-out hover:scale-110 bg-black rounded-full border border-gray-700 hover:bg-gray-900 hover:border-white">
      <a href={href} target="_blank" rel="noopener" className="block p-2">
        <Image src={src} alt={alt} width={15} height={15} />
      </a>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="p-4 gap-4 flex flex-col justify-center items-center">
      <div className="flex gap-4">
        {icons.map((icon, index) => (
          <Icon key={index} {...icon} />
        ))}
      </div>
      <p className="cursor-help">© 2092</p>
    </footer>
  );
}
