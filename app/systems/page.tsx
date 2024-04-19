import { Chip } from '@nextui-org/react';
import Image from 'next/image';
import { sql } from "@vercel/postgres";

const title = "Curated systems to achieve Enough.";
const description = "Inspired by the wisdom of great minds, these systems are designed to get us closer to Enough and enrich our journey on Planet Earth.";
const cta = "Engage with them. Here and now.";
const size = 40;

export default async function Page() {
    const { rows: systems } = await sql`SELECT * from SYSTEMS order by display`;
    return (
        <main>
            <div className="max-w-sm flex flex-col gap-2 text-center">
                <h2>{title}</h2>
                <p>{description}</p>
                <small className='text-gray-500'>{cta}</small>
            </div>
            {systems.map((system, index) => (
                <a href={system.app} target='_blank' rel='noopener' key={index} className="max-w-sm p-4 rounded-xl border border-gray-700 shadow hover:border-gray-100 transition-colors duration-500">
                    <div className="flex items-center gap-3">
                        <Image src={`${system.app}/logo.svg`} alt={system.name} width={size} height={size} />
                        <h3>{system.name}</h3>
                    </div>
                    <div className='py-3'>
                        <p className='text-justify'>{system.description}</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        {system.github ? 
                        <a href={system.github} target='_blank' rel='noopener'>
                            <Chip variant='faded' color='primary'>github</Chip>
                        </a> : null}
                    </div>
                </a>
            ))}
        </main>
    );
}
