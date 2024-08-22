import Image from "next/image";

export default function Header() {
  return (
    <header>
      <Image
        src="/logo.svg"
        alt="logo"
        width={50}
        height={50}
        priority={true}
      />
    </header>
  );
}
