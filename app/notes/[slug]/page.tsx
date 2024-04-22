import Image from 'next/image';
import { sql } from "@vercel/postgres";
import { revalidatePath } from 'next/cache';

export default async function Page({ params }: { params: { slug: string } }) {
    // incrementing the views counter
    await sql`UPDATE NOTES SET views = views + 1 where slug=${params.slug}`;

    // revalidating the cache
    revalidatePath(`/notes/${params.slug}`);
    revalidatePath("/notes");

    // fetching the note and its chapters from the database
    const { rows: [note] } = await sql`SELECT * from NOTES where slug=${params.slug}`;
    const { rows: chapters } = await sql`SELECT * from CHAPTERS where note_slug=${params.slug}`;

    return (
        <main>
            {/* note details */}
            <div className="text-center max-w-sm">
                <h3>{note.title}</h3>
                <small className='text-gray-500'>{note.date}</small>
                <div className='flex justify-center items-center gap-1'>
                    <small className='text-gray-500'>{note.views}</small>
                    <Image src="/views.svg" alt="views" width={15} height={15}/>
                </div>
            </div>

            {/* note chapters */}
            {chapters.map((chapter, index) => (
                <div key={index} className="text-justify w-full max-w-sm">

                    {/* chapter title and content, oprtional image */}
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

            {/* call to action */}
            {note.cta ? 
            <div className="text-justify w-full max-w-sm">
                <p>{note.cta}</p>
                <a href={note.cta_link} target='_blank' rel='noopener'><small className='text-white'><b>Here and now.</b></small></a>
            </div> : null}
        </main>
    );
}