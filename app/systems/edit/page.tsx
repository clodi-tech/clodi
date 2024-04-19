import { sql } from "@vercel/postgres";
import { revalidatePath } from 'next/cache';

// read pin from env variable
const PIN = process.env.PIN;

async function updateSystem(FormData: FormData) {
    "use server"
    const updated = {
        name: String(FormData.get('name')),
        description: String(FormData.get('description')),
        app: String(FormData.get('app')),
        github: String(FormData.get('github')),
        display: Number(FormData.get('display')),
        pin: FormData.get('pin'),
    }

    // check if the pin is correct
    if (updated.pin !== PIN) return;

    // update the system in the database
    await sql`UPDATE SYSTEMS SET description=${updated.description}, app=${updated.app}, github=${updated.github}, display=${updated.display} WHERE name=${updated.name}`;

    // revalidate the page
    revalidatePath("/systems");
    revalidatePath("/systems/edit");
}

export default async function Page() {
    // get all the systems from the database
    const { rows: systems } = await sql`SELECT * from SYSTEMS order by display`;

    return (
        <main>
            {/* Generate a form for each system */}
            {systems.map((system, index) => (
                <form key={index} className="max-w-sm w-full flex flex-col gap-2 p-2 border border-gray-800 rounded-lg" action={updateSystem}>
                    <div className="flex gap-2">
                    <label htmlFor={`name-${system.name}`}>name:</label>
                    <input id={`name-${system.name}`} name="name" defaultValue={system.name} readOnly /></div>
                    
                    <div className="flex gap-2">
                    <label htmlFor={`description-${system.name}`}>desc:</label>
                    <textarea id={`description-${system.name}`} name="description" defaultValue={system.description} rows={4} /></div>

                    <div className="flex gap-2">
                    <label htmlFor={`app-${system.name}`}>app:</label>
                    <input id={`app-${system.name}`} name="app" defaultValue={system.app} /></div>

                    <div className="flex gap-2">
                    <label htmlFor={`github-${system.name}`}>github:</label>
                    <input id={`github-${system.name}`} name="github" defaultValue={system.github} /></div>

                    <div className="flex gap-2">
                    <label htmlFor={`display-${system.name}`}>display:</label>
                    <input id={`display-${system.name}`} name="display" defaultValue={system.display} /></div>

                    <div className="flex gap-2">
                    <label htmlFor={`pin-${system.name}`}>pin:</label>
                    <input id={`pin-${system.name}`} name="pin" type="password" /></div>

                    <button type="submit">Save</button>
                </form>
            ))}
        </main>
    );
}