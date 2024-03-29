import { Accordion, AccordionItem } from "@nextui-org/react";

export default function Notes() {
    const defaultContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

    return (
        <>
            <div className='flex flex-col justify-center items-center gap-4'>
                <div className="max-w-md">
                    <h2>a collection of notes to lighten the mind.</h2>
                    <p></p>
                </div>
            </div>
            <Accordion>
                <AccordionItem key="1" aria-label="note 1" subtitle="2024.01.01" title="first note">
                    <div className="max-w-sm">
                        <h2>the idea behind building a system.</h2>
                        <p>{defaultContent}</p>
                    </div>
                </AccordionItem>
                <AccordionItem key="2" aria-label="note 2" subtitle="2024.02.01" title="second note">
                    <div className="max-w-sm">
                        <h2>the idea behind building a system.</h2>
                        <p>{defaultContent}</p>
                    </div>
                </AccordionItem>
                <AccordionItem key="3" aria-label="note 3" subtitle="2024.03.01" title="third note">
                    <div className="max-w-sm">
                        <h2>the idea behind building a system.</h2>
                        <p>{defaultContent}</p>
                    </div>
                </AccordionItem>
            </Accordion>
        </>
    );
}
