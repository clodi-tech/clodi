import Image from "next/image";

const icons = [
  { src: "/twitter.svg", alt: "twitter", href: "https://x.com/clodi_tech" },
  { src: "/github.svg", alt: "github", href: "https://github.com/clodi-tech" },
  {
    src: "/linkedin.svg",
    alt: "linkedin",
    href: "https://www.linkedin.com/in/claudio-calle/",
  },
];

function Icon({ src, alt, href }: { src: string; alt: string; href: string }) {
  return (
    <a href={href} target="_blank" rel="noopener">
      <Image src={src} alt={alt} width={15} height={15} />
    </a>
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
