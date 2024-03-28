import Image from 'next/image'
import Link from 'next/link';

export default function Header() {
    return (
        <header>
            <Link href='/'>
                <Image src='/logo.svg' alt='logo'
                    width={50} height={50}
                    priority={true}/>
            </Link>
        </header>
    );
}
