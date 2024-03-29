'use client';

import { Tabs, Tab } from '@nextui-org/react';
import Hello from "./hello";
import Systems from "./systems";
import Notes from "./notes";

export default function Menu() {

  return (
      <Tabs key='menu' variant='underlined' aria-label="menu">
        <Tab key="hello" title="hello">
          <Hello />
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
