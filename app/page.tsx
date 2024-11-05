import Image from "next/image";

// defining the content of the page
const title = "Hey! It's me, Clodi.";
const small = "Homo Sapiens - Planet Earth - Internet";
const paragraphs = [
  "I am a human being who finds joy in the <b>art of coding</b> at the intersection between <u>humans</u>, <u>nature</u> and <u>technology</u> - where elusive connections can converge into magic.",
  "Right now I am probably hiking, meditating or building <b>Commit OS</b> - a simple and beautiful system to organize our life around our goals. Check it out.",
];
const size = 100;
const CTA = "https://commitos.com";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col gap-4 max-w-sm">
        {/* image, title and subtitle */}
        <div className="flex justify-center items-center gap-4">
          <Image
            src="/about.jpeg"
            alt="about"
            className="rounded-3xl border-2 border-gray-600"
            width={size}
            height={size}
          />
          <div className="flex flex-col">
            <h1>{title}</h1>
            <small className="text-gray-500">{small}</small>
          </div>
        </div>

        {/* biography paragraphs */}
        {paragraphs.map((text, index) => (
          <p
            key={index}
            className="text-justify"
            dangerouslySetInnerHTML={{ __html: text }}
          />
        ))}

        {/* call to action */}
        <a href={CTA} target="_blank" rel="noopener">
          <small className="text-white underline underline-offset-2">
            <b>Here and now.</b>
          </small>
        </a>
      </div>
    </main>
  );
}
