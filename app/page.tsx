import Image from 'next/image';

const title = "hey! it's me, clodi.";
const small = "homo sapiens - planet earth - internet";
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
                <p className='text-justify'>i am a developer who finds joy in the <b>art of coding</b> at the intersection between humans, nature and technology, where elusive connections can converge into something magical.</p>
                <p className='text-justify'>with nearly ninety months in the corporate world, delivering digital solutions that touched thousands of lives, i realised that was not enough. i did not want to just contribute but to <b>innovate</b>. i want to create solutions to everyday challenges that resonate with humans, just like you and me.</p>
                <p className='text-justify'>i want to find that <b>Enough</b>, as i am here to help you find yours - a point in time and space where calm, clarity and joy are the only constants. i know it is somewhere within ourselves and technology may help us find it.</p>
                <p className='text-justify'>no matter how far or close you are from your enough, your insights could spark the next magical system we may build together.<br />... feel free to reach me out. here and now.</p>
            </div>
            <a href="/resume.pdf" target='_blank' rel='noopener'>
                <div className='flex justify-center items-center gap-1'>
                    <Image src="/download.svg" alt='download' width={30} height={30} />
                    <p className='text-white'>resume</p>
                </div>
            </a>
        </main>
    );
}
