import Image from 'next/image';

const title = "hey! it's me, clodi.";
const small = "homo sapiens - planet earth - internet";
const biography = [
    "i am a developer who finds joy in the art of coding at the intersection betweeen humans, nature and technology, where elusive connections can converge into something magical.",
    "after spending nearly ninthy months delivering digital solutions for corporations, being adopted by thousands of lives, i realised it was not enough. i wanted to create and launch my own solutions to common humans' problems that can resonate for me and for others, just like you.",
    "i now want to find that enough, and i am here on a mission to help you find your enough. i know it is somewhere within ourself, we just need the right questions and tools to find out where it hides.",
    "that is why i steal the best rules from inspiring people to craft systems that work for humans, like you and me. they help us find better questions and use better tools to enhance our journey on planet earth. feel free to use them.",
    "you can also find some notes about the rules, the ideas, the people behind a system. it may help you learning the rules, so that you can finally break them and find your enough. feel free to read them.",
    "no matter how far or close you are from your enough, you may have rules that work for you. just share them with me as i am here to help you navigate the complexity of the digital realm and we may craft a magical system together. feel free to reach me out. here and now.",
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
