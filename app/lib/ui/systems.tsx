import { Card, CardBody, CardFooter, CardHeader, Chip } from '@nextui-org/react';
import Image from 'next/image';

export default function Systems() {
    return (
        <>
            <div className='flex flex-col justify-center items-center gap-4'>
                <div className="max-w-md">
                    <h2>a collection of systems to engineer freedom.</h2>
                    <p></p>
                </div>
                <Card className="max-w-sm">
                    <CardHeader className="flex item-center gap-4">
                        <Image alt="logo"
                            width={40} height={40}
                            src="/tradeboss.svg"/>
                        <h3>tradeboss</h3>
                    </CardHeader>
                    <CardBody>
                        <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </CardBody>
                    <CardFooter>
                        <a href="https://tradeboss.vercel.app/">
                            <Chip variant='faded' color='primary'>launch app</Chip>
                        </a>
                    </CardFooter>
                </Card>
                <Card className="max-w-sm">
                    <CardHeader className="flex item-center gap-4">
                        <Image alt="logo"
                            width={40} height={40}
                            src="/tradeboss.svg"/>
                        <h3>tradeboss</h3>
                    </CardHeader>
                    <CardBody>
                        <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </CardBody>
                    <CardFooter>
                        <a href="https://tradeboss.vercel.app/">
                            <Chip variant='faded' color='primary'>launch app</Chip>
                        </a>
                    </CardFooter>
                </Card>
            </div>
        </>
    );
}
