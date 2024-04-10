import { Card, CardBody, CardFooter, CardHeader, Chip } from '@nextui-org/react';
import Image from 'next/image';
import { systemsData } from './systems';

const title = "curated systems to achieve results.";
const description = "learn the rules, then break the rules.";

export default function Page() {
    return (
        <main>
            <div className="text-center max-w-sm">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            {systemsData.map((system, index) => (
                <Card key={index} className="max-w-sm">
                    <CardHeader className="flex item-center gap-4 pb-1">
                        <Image src={system.logo} alt={system.name} width={40} height={40} />
                        <h3>{system.name}</h3>
                    </CardHeader>
                    <CardBody className='py-0'>
                        <p className='text-justify'>{system.description}</p>
                    </CardBody>
                    <CardFooter>
                        <a href={system.link} target='_blank' rel='noopener noreferrer'>
                            <Chip variant='faded' color='primary'>launch app</Chip>
                        </a>
                    </CardFooter>
                </Card>
            ))}
        </main>
    );
}
