import { Divider } from "@nextui-org/react";
import Link from "next/link";
import { Fragment } from "react";
import { sql } from "@vercel/postgres";

const title = "Curated notes to define Enough.";
const description = "Dive into the ideas, questions and pioneers that inspired our systems. These notes are the foundation for meaningful human-machine interactions on our journey towards Enough.";
const cta = "Pick one and read it. Here and now.";

export default async function Page() {
    const { rows } = await sql`SELECT * from NOTES`;

    return (
        <main>
            <div className="max-w-sm flex flex-col gap-2 text-center">
                <h2>{title}</h2>
                <p>{description}</p>
                <small className='text-gray-500'>{cta}</small>
            </div>
            <div className="flex flex-col gap-2 w-full max-w-sm">
                {rows.map((note, index) => (
                    <Fragment key={index}>
                        <Divider />
                        <Link href={`/notes/${note.slug}`} className="px-3 py-1 rounded-lg hover:bg-gray-800 transition-colors duration-500">
                            <h3>{note.title}</h3>
                            <small className='text-gray-500'>{note.date}</small>
                        </Link>
                    </Fragment>
                ))}
            </div>
        </main>
    );
}
