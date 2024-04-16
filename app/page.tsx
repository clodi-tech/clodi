import Image from 'next/image';

const title = "Hey! It's me, Clodi.";
const small = "Homo Sapiens - Planet Earth - Internet";
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
                <p className='text-justify'>I am a developer who finds joy in the <b>art of coding</b> at the intersection between <u>humans</u>, <u>nature</u> and <u>technology</u> - where elusive connections can converge into something magical.</p>
                <p className='text-justify'>In my carreer, I delivered digital solutions that touched thousands of lives - yet after years in the field I realised <u>that was not Enough</u> for me. All I want is to <b>create solutions</b> for everyday challenges that resonate with humans, just like you and me.</p>
                <p className='text-justify'>Today, my journey is about finding that <b>Enough</b> - a point in time and space where abundance meets us and <u>we have everything we need</u>. I know it is somewhere within ourselves and a mindful use of technology may guide us there.</p>
                <p className='text-justify'>I am here to craft <b>systems</b> you can use, write <b>notes</b> you can read, and help us find our Enough.</p>
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
