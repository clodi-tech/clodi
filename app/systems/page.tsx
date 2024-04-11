import { Chip } from '@nextui-org/react';
import Image from 'next/image';
import { systemsData } from './systems';

const title = "curated systems to achieve enough.";
const description = "learn the rules, then break the rules.";

export default function Page() {
    return (
        <main>
            <div className="text-center max-w-sm">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            {systemsData.map((system, index) => (
                <div key={index} className="max-w-sm p-4 rounded-xl border border-gray-700 shadow hover:border-gray-100 transition-colors duration-500">
                    <div className="flex items-center gap-3">
                        <Image src={system.logo} alt={system.name} width={40} height={40} />
                        <h3>{system.name}</h3>
                    </div>
                    <div className='py-3'>
                        <p className='text-justify'>{system.description}</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <a href={system.link} target='_blank' rel='noopener'>
                            <Chip variant='faded' color='primary'>launch app</Chip>
                        </a>
                    </div>
                </div>
            ))}
        </main>
    );
}
