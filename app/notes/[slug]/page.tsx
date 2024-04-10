import { notesData } from "../notes";

export default async function Page({ params }: { params: { slug: string } }) {
    const note = notesData.find((note) => note.slug === params.slug);

    if(!note) {
        return <main>404 - note not found</main>;
    }

    return (
        <main>
            <div className="text-center max-w-md">
                <h2>{note.title}</h2>
                <small>{note.date}</small>
            </div>
            <div className="text-justify max-w-md">
                <p>{note.content}</p>
            </div>
        </main>
    );
}