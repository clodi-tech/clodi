import Link from 'next/link';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";

const GITHUB = 'https://github.com/sonolibero';
const TWITTER = 'https://twitter.com/sonolibero_io';
const INSTAGRAM = 'https://www.instagram.com/clodcalle/';
const LINKEDIN = 'https://www.linkedin.com/in/claudio-calle/';
const SIZE = 20;

export default function Footer() {
  return (
    <footer className='p-4 gap-2 flex flex-col justify-center items-center'>
      <div className="gap-1 flex">
        <p>built by</p>
        <a className="underline underline-offset-2" href='https://sonolibero.io' target='_blank'>libero</a>
        <p>-</p>
        <p>send me your</p>
        <Link href='/feedback' className="underline underline-offset-2">feedback</Link>
      </div>
      <div className="gap-3 flex">
        <a href={GITHUB} target='_blank'><AiFillGithub size={SIZE} /></a>
        <a href={TWITTER} target='_blank'><AiFillTwitterCircle size={SIZE} /></a>
        <a href={INSTAGRAM} target='_blank'><AiFillInstagram size={SIZE} /></a>
        <a href={LINKEDIN} target='_blank'><AiFillLinkedin size={SIZE} /></a>
      </div>
      <div>© 2092</div>
    </footer>
  );
}