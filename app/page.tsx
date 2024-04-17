import Image from 'next/image';

const title = "Hey! It's me, Clodi.";
const small = "Homo Sapiens - Planet Earth - Internet";
const size = 100;
const FORM = "https://clodi.ck.page/7a1db31a8b";

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
                <p className='text-justify'>In my career, I delivered digital solutions that touched thousands of lives - yet after years in the field I realised <u>that was not Enough</u> for me. All I want is to <b>create solutions</b> for everyday challenges that resonate with humans, just like you and me.</p>
                <p className='text-justify'>Today, my journey is about finding that <b>Enough</b> - a point in time and space where abundance meets us and <u>we have anything we need</u>. I feel it is somewhere within ourselves and a mindful use of technology may guide us there.</p>
                <p className='text-justify'>I am here to craft <b>systems</b> you can use, write <b>notes</b> you can read. And if you start questioning <u>what is Enough for you</u>, subscribe for free and start your journey with five quests about Enough.</p>
                <a href={FORM} target='_blank' rel='noopener'><small className='text-white'><b>Here and now.</b></small></a>
            </div>
        </main>
    );
}
