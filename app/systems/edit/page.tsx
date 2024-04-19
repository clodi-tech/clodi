import { sql } from "@vercel/postgres";

async function updateSystem() {
    "use server"
    console.log("save");
}

export default async function Page() {
    // get all the systems from the database
    const { rows: systems } = await sql`SELECT * from SYSTEMS order by display`;

    return (
        <main>
            {/* Pin code input at the top of the page */}
            <div>
                <label htmlFor="pin">Enter Pin Code:</label>
                <input type="password" id="pin" name="pin" />
            </div>

            {/* Generate a form for each system */}
            {systems.map((system, index) => (
                <form key={index} className="flex flex-col" action={updateSystem}>
                    <h3>{system.name}</h3>
                    <div className="flex gap-2">
                    <label htmlFor={`name-${system.name}`}>Name:</label>
                    <input id={`name-${system.name}`} name="name" defaultValue={system.name} /></div>
                    
                    <div className="flex gap-2">
                    <label htmlFor={`description-${system.name}`}>Desc:</label>
                    <input id={`description-${system.name}`} name="description" defaultValue={system.description} /></div>

                    <div className="flex gap-2">
                    <label htmlFor={`app-${system.name}`}>App URL:</label>
                    <input id={`app-${system.name}`} name="app" defaultValue={system.app} /></div>

                    <div className="flex gap-2">
                    <label htmlFor={`github-${system.name}`}>GitHub URL:</label>
                    <input id={`github-${system.name}`} name="github" defaultValue={system.github} /></div>

                    <div className="flex gap-2">
                    <label htmlFor={`github-${system.display}`}>Display:</label>
                    <input id={`github-${system.display}`} name="github" defaultValue={system.display} /></div>

                    <button type="submit">Save</button>
                </form>
            ))}
        </main>
    );
}