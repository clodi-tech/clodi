import Image from 'next/image';

const title = "hey! it's me, clodi.";
const small = "homo sapiens - planet earth - internet";
const biography = [
    "i am a developer who finds joy in the art of coding at the intersection betweeen humans, nature and technology, where elusive connections can converge into something magical.",
    "after spending nearly ninthy months delivering digital solutions for corporations, being adopted by thousands of lives, i realisez it was not enough. i wanted to create and launch my own solutions to common humans' problems that can resonate for me and for others, just like you.",
    "i want to find my enough. i want to help you find your enough. i know it is somewhere within ourself, we just need the right questions and tools to find out where it hides.",
    "that is why i steal the best rules from inspiring people to craft systems that work for humans, like you and me. they help us find better questions and use better tools to find our enough.",
    "you can also find some notes about the rules, the ideas behind a system. it may help you to learn the rules, so that you can finally break them and find your enough.",
    "if you have rules or systems that work for you, feel free to share them with me. we may work together to shorten our journey in finding our enough.",
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
