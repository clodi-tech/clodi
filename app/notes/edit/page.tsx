import { sql } from "@vercel/postgres";
import { revalidatePath } from 'next/cache';

// read pin from env variable
const PIN = process.env.PIN;

async function updateNote(FormData: FormData) {
    "use server"
    const updated = {
        slug: String(FormData.get('slug')),
        title: String(FormData.get('title')),
        date: String(FormData.get('date')),
        views: String(FormData.get('views')),
        cta: Number(FormData.get('cta')),
        cta_link: Number(FormData.get('cta_link')),
        pin: FormData.get('pin'),
    }

    // check if the pin is correct
    if (updated.pin !== PIN) return;

    // update the note in the database
    await sql`UPDATE NOTES SET title=${updated.title}, date=${updated.date}, views=${updated.views}, cta=${updated.cta}, cta_link=${updated.cta_link} WHERE name=${updated.slug}`;

    // revalidate the page
    revalidatePath("/notes");
    revalidatePath(`/notes/${updated.slug}`);
}

export default async function Page() {
    // get all the notes from the database
    const { rows: notes } = await sql`SELECT * from NOTES order by date desc`;

    return (
        <main>
            {/* Generate a form for each note */}
            {notes.map((note, index) => (
                <form key={index} className="flex flex-col" action={updateNote}>
                    <div className="flex gap-2">
                    <label htmlFor={`slug-${note.slug}`}>Slug:</label>
                    <input id={`slug-${note.slug}`} name="slug" defaultValue={note.slug} /></div>
                    
                    <div className="flex gap-2">
                    <label htmlFor={`title-${note.slug}`}>Desc:</label>
                    <input id={`title-${note.slug}`} name="title" defaultValue={note.title} /></div>

                    <div className="flex gap-2">
                    <label htmlFor={`date-${note.slug}`}>Date:</label>
                    <input id={`date-${note.slug}`} name="date" defaultValue={note.date} /></div>

                    <div className="flex gap-2">
                    <label htmlFor={`views-${note.slug}`}>Views:</label>
                    <input id={`views-${note.slug}`} name="views" defaultValue={note.views} /></div>

                    <div className="flex gap-2">
                    <label htmlFor={`cta-${note.slug}`}>Cta:</label>
                    <input id={`cta-${note.slug}`} name="cta" defaultValue={note.cta} /></div>

                    <div className="flex gap-2">
                    <label htmlFor={`cta_link-${note.slug}`}>Cta Link:</label>
                    <input id={`cta_link-${note.slug}`} name="cta_link" defaultValue={note.cta_link} /></div>

                    <div className="flex gap-2">
                    <label htmlFor={`pin-${note.slug}`}>Pin:</label>
                    <input id={`pin-${note.slug}`} name="pin" type="password" /></div>

                    <button type="submit">Save</button>
                </form>
            ))}
        </main>
    );
}