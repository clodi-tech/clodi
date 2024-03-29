import Image from 'next/image';

export default function Hello() {
    return (
        <Image src="/about.jpeg" alt="about" className="rounded-full"
          width={100} height={100}/>
    );
}
