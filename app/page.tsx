import Logo from "@/public/logo.png";
import ProfilePic from "@/public/profile.jpeg";
import Image from "next/image";
import { Links } from "@/lib/const";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const products = [
  {
    name: "Commit OS",
    description: "Your life, simply organized.",
    link: "https://commitos.com",
  },
  {
    name: "Easycommerce",
    description: "Ecommerce, but easy.",
    link: "https://easycommerce.live",
  },
];

const projects = [
  {
    name: "Wagone",
    description: "See the world by rail.",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-20 py-16 px-4 max-w-2xl mx-auto">
      {/* Section 1: Intro */}
      <section className="flex flex-col items-center gap-4 w-full">
        <Image src={Logo} alt="Logo" width={50} height={50} />
        <div className="flex items-center gap-4">
          <Image
            src={ProfilePic}
            alt="Profile"
            width={56}
            height={56}
            className="rounded-xl border border-4 border-muted"
          />
          <h1 className="text-2xl font-semibold mt-2">
            hey! Clodi here{" "}
            <span role="img" aria-label="waving hand">
              👋
            </span>
          </h1>
        </div>
        <p className="text-muted-foreground text-center max-w-md">
          I craft meaningful human-machine interaction with care.
        </p>
      </section>

      {/* Section 2: Products */}
      <section className="w-full flex flex-col gap-4">
        <h2 className="text-lg mb-2">Products I have built</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {products.map((product, i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle>{product.name}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Section 3: Projects */}
      <section className="w-full flex flex-col gap-4">
        <h2 className="text-lg mb-2">Projects I have worked on</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle>{project.name}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Section 4: Contact */}
      <section className="w-full flex flex-col gap-4 items-center">
        <h2 className="text-lg font-semibold mb-2">We may work together</h2>
        <div className="flex gap-2 w-full max-w-xs">
          <Input
            type="email"
            placeholder="Your email"
            required
            className="flex-1"
          />
          <Button type="submit">Send</Button>
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          Connect with me on{" "}
          <a
            href={Links.linkedin}
            target="_blank"
            rel="noopener"
            className="underline underline-offset-2 text-blue-500"
          >
            LinkedIn
          </a>
        </p>
      </section>
    </main>
  );
}
