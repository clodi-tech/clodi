import { Accordion, AccordionItem } from "@nextui-org/react";

const defaultHeading = "the idea behind building a system";
const defaultContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
const notes = [
    {
        title: 'third note',
        date: '2024.03.01',
        heading: defaultHeading,
        content: defaultContent
    },
    {
        title: 'second note',
        date: '2024.02.01',
        heading: defaultHeading,
        content: defaultContent
    },
    {
        title: 'first note',
        date: '2024.01.01',
        heading: defaultHeading,
        content: defaultContent
    },
]

export default function Notes() {

    return (
        <>
            <div className='flex flex-col justify-center items-center gap-4'>
                <div className="max-w-md">
                    <h2>a collection of notes to lighten the mind.</h2>
                    <p></p>
                </div>
            </div>
            <Accordion>
                {notes.map((note, index) => (
                    <AccordionItem key={index} aria-label={`note ${note.title}`} subtitle={note.date} title={note.title}>
                        <div className="max-w-sm">
                            <h2>{note.heading}</h2>
                            <p>{note.content}</p>
                        </div>
                    </AccordionItem>
                ))}
            </Accordion>
        </>
    );
}
