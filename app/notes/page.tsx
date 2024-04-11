import { Divider } from "@nextui-org/react";
import Link from "next/link";
import { Fragment } from "react";
import { notesData } from "./notes";

const title = "curated notes to explain enough.";
const description = "the power of writing to unlock evolution.";

export default function Page() {

    return (
        <main>
            <div className="text-center max-w-sm">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <div className="flex flex-col gap-2 w-full max-w-sm">
                {notesData.map((note, index) => (
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
