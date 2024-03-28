'use client';
import Image from "next/image";
import { Tabs, Tab } from '@nextui-org/react';
import Systems from "./systems";
import Notes from "./notes";

export default function Menu() {

  return (
      <Tabs key='menu' variant='underlined' aria-label="menu">
        <Tab key="hello" title="hello">
          <Image src="/about.jpeg" alt="about" className="rounded-full"
            width={100} height={100}/>
        </Tab>
        <Tab key="systems" title="systems">
          <Systems />
        </Tab>
        <Tab key="notes" title="notes">
          <Notes />
        </Tab>
      </Tabs>
  );
}
