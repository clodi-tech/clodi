'use client';

import { Tabs, Tab } from '@nextui-org/react';

export default function Menu() {

  return (
    <main>
      <Tabs key='menu' variant='underlined' aria-label="menu">
        <Tab key="hello" title="hello"></Tab>
        <Tab key="systems" title="systems"></Tab>
        <Tab key="notes" title="notes"></Tab>
      </Tabs>
    </main>
  );
}
