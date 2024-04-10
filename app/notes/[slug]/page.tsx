type Note = {
    title: string;
    date: string;
    content: string;
};

type Notes = {
    [key: string]: Note;
};

const notes: Notes = {
    'first-note': {
        title: 'first note',
        date: '2024.01.01',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    'second-note': {
        title: 'second note',
        date: '2024.02.01',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    'third-note': {
        title: 'third note',
        date: '2024.03.01',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
}

export default async function Page({ params }: { params: { slug: string } }) {
    return (
        <main>
            <div className="text-center max-w-md">
                <h2>{notes[params.slug].title}</h2>
                <small>{notes[params.slug].date}</small>
            </div>
            <div className="text-justify max-w-md">
                <p>{notes[params.slug].content}</p>
            </div>
        </main>
    );
}