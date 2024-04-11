import Image from 'next/image';

const title = "hey! it's me, clodi.";
const small = "homo sapiens - planet earth - internet";
const biography = [
    "i am a developer who finds joy in the art of coding at the intersection between humans, nature and technology, where elusive connections can converge into something magical.",
    "with nearly ninety months in the corporate world, delivering digital solutions that touched thousands of lives, i realised that was not enough. i did not want to just contribute but to innovate. i want to create solutions to everyday challenges that resonate with humans, just like you and me.",
    "i want to find that enough, as i am here to help you find yours - a point in time and space where calm, clarity and joy are the only constants. i know it is somewhere within ourselves and technology may help us find it.",
    "we just need the right system to unearth where it hides. that is why i borrow the finest rules, tools and questions from the greatest minds to design and craft systems that enrich our journey on planet earth. feel free to engage with them.",
    "within my notes, you will find the philosophies, ideas, and pioneers behind a system. they are not just guidelines but stepping stones to innovation and human exploration. feel free to read them.",
    "no matter how far or close you are from your enough, your insights could spark the next magical system we may build together. feel free to reach me out. here and now.",
];
const size = 100;

export default function Home() {
    return (
        <main>
            <div className='flex flex-col gap-4 max-w-sm'>
                <div className='flex justify-center items-center gap-4'>
                    <Image src="/about.jpeg" alt="about" className="rounded-3xl border-2 border-gray-600"
                        width={size} height={size}/>
                    <div className='flex flex-col'>
                        <h1>{title}</h1>
                        <small className='text-gray-500'>{small}</small>
                    </div>
                </div>
                {biography.map((bio, index) => (
                    <p key={index} className='text-justify'>{bio}</p>
                ))}
            </div>
            <a href="/resume.pdf" target='_blank'>
                <div className='flex justify-center items-center gap-1'>
                    <Image src="/download.svg" alt='download' width={30} height={30} />
                    <p className='text-white'>resume</p>
                </div>
            </a>
        </main>
    );
}
