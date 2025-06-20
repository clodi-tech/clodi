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
import FormEmail from "@/components/form-email";
import { products, projects } from "@/lib/const";

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
            className="rounded-xl border-4 border-muted"
          />
          <h1 className="text-2xl font-semibold mt-2">
            hey! Clodi here{" "}
            <span role="img" aria-label="waving hand">
              👋
            </span>
          </h1>
        </div>
        <p className="text-muted-foreground text-center max-w-md">
          I craft meaningful digital experiences with care.
        </p>
      </section>

      {/* Section 2: Products */}
      <section className="w-full flex flex-col gap-4">
        <h2 className="text-lg mb-2">
          I <span className="font-semibold">create products</span> that should
          exist
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {products.map((product, i) => (
            <a href={product.link} target="_blank" rel="noopener" key={i}>
              <Card>
                <CardHeader>
                  <CardTitle>{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
              </Card>
            </a>
          ))}
        </div>
      </section>

      {/* Section 3: Projects */}
      <section className="w-full flex flex-col gap-4">
        <h2 className="text-lg mb-2">
          I <span className="font-semibold">help projects</span> that want to
          matter
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <a href={project.link} target="_blank" rel="noopener" key={i}>
              <Card>
                <CardHeader>
                  <CardTitle>{project.name}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
              </Card>
            </a>
          ))}
        </div>
      </section>

      {/* Section 4: Contact */}
      <section className="w-full flex flex-col gap-4 items-center">
        <h2 className="text-lg font-semibold mb-2">We may work together</h2>
        <FormEmail />
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
