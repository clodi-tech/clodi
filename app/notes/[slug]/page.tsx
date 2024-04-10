import { notesData } from "../notes";

export default async function Page({ params }: { params: { slug: string } }) {
    const note = notesData.find((note) => note.slug === params.slug);

    if(!note) {
        return <main>404 - note not found</main>;
    }

    return (
        <main>
            <div className="text-center max-w-md">
                <h3>{note.title}</h3>
                <small>{note.date}</small>
            </div>
            {note.content.map((chapter, index) => (
                <div key={index} className="text-justify w-full max-w-md">
                    <h2>{chapter.title}</h2>
                    <p>{chapter.content}</p>
                </div>
            ))}
        </main>
    );
}