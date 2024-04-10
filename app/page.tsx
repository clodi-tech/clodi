import Image from 'next/image';

const title = "hey! it's me, clodi.";
const biography = [
    "homo sapiens - planet earth - internet.",
    "i love to write code trying to find meaningful connections between humans, nature and technology.",
    "crafting meaningful human-machine interactions to upgrade user experience on planet earth.",
    "right now i am probably delving into human existence or launching digital products in record time.",
    "i spent 7 years working for corporations delivering digital projects used by thousands users.",
    "today i code and launch my own projects and i help talents - startups do the same in the most efficient way thru iterations.",
    "do you have an idea you want to execute or a project you need to deliver in record time-and-quality?",
    "intro to systems.",
    "intro to notes.",
]
const size = 100;

export default function Home() {
    return (
        <main>
            <div className='flex flex-col gap-4 max-w-sm'>
                <div className='flex justify-center items-center gap-4'>
                    <Image src="/about.jpeg" alt="about" className="rounded-3xl border-2 border-gray-600"
                        width={size} height={size}/>
                    <h1>{title}</h1>
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
