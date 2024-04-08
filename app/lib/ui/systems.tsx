import { Card, CardBody, CardFooter, CardHeader, Chip } from '@nextui-org/react';
import Image from 'next/image';

const title = "a collection of systems to engineer freedom.";
const description = "";
const defaultContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
const systems = [
    {
        name: 'tradeboss',
        description: defaultContent,
        link: 'https://tradeboss.vercel.app/',
        logo: '/tradeboss.svg'
    },
    {
        name: 'sorival',
        description: defaultContent,
        link: 'https://sorival.vercel.app/',
        logo: '/sorival.svg'
    },
    {
        name: 'lightime',
        description: defaultContent,
        link: 'https://lightime.vercel.app/',
        logo: '/lightime.svg'
    },
    {
        name: 'goldenr',
        description: defaultContent,
        link: 'https://goldenr.vercel.app/',
        logo: '/goldenr.svg'
    },
    {
        name: 'dgames',
        description: defaultContent,
        link: 'https://libero-dgames.netlify.app/',
        logo: '/dgames.svg'
    },
    {
        name: 'arcade',
        description: defaultContent,
        link: 'https://libero-arcade.netlify.app/',
        logo: '/arcade.svg'
    },
    {
        name: 'fly',
        description: defaultContent,
        link: 'https://photos.app.goo.gl/Mo5JA2qGBbL2W1qT9',
        logo: '/fly.svg'
    },
]

export default function Systems() {
    return (
        <>
            <div className='flex flex-col justify-center items-center gap-4'>
                <div className="text-center max-w-md">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
                {systems.map((system, index) => (
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
            </div>
        </>
    );
}
