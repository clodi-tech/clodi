import { notesData } from "../notes";
import Image from 'next/image';

export default async function Page({ params }: { params: { slug: string } }) {
    const note = notesData.find((note) => note.slug === params.slug);

    if(!note) {
        return <main>404 - note not found</main>;
    }

    return (
        <main>
            <div className="text-center max-w-sm">
                <h3>{note.title}</h3>
                <small>{note.date}</small>
            </div>
            {note.content.map((chapter, index) => (
                <div key={index} className="text-justify w-full max-w-sm">
                    <h2>{chapter.title}</h2>
                    <p>{chapter.content}</p>
                    {chapter.image ?
                        <div className="flex justify-center items-center m-2">
                            <Image src={chapter.image} alt="image" 
                                width={chapter.width} height={chapter.height}/>
                        </div>
                        : null}
                </div>
            ))}
        </main>
    );
}