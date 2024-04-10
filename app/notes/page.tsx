import { Divider } from "@nextui-org/react";
import Link from "next/link";

const title = "a collection of notes to lighten the mind.";
const description = "";
const defaultHeading = "the idea behind building a system";
const defaultContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
const notes = [
    {
        title: 'third note',
        date: '2024.03.01',
        slug: 'third-note',
    },
    {
        title: 'second note',
        date: '2024.02.01',
        slug: 'second-note',
    },
    {
        title: 'first note',
        date: '2024.01.01',
        slug: 'first-note',
    },
]

export default function Page() {

    return (
        <main>
            <div className="text-center max-w-md">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <div className="flex flex-col gap-2 w-full max-w-sm">
                {notes.map((note, index) => (
                    <>
                        <Divider key={index} />
                        <Link key={index} href={`/notes/${note.slug}`} className="px-3 py-1 rounded-lg hover:bg-gray-800 transition-colors duration-500">
                            <h3>{note.title}</h3>
                            <small>{note.date}</small>
                        </Link>
                    </>
                ))}
            </div>
        </main>
    );
}
