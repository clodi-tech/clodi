type Note = {
    title: string;
    date: string;
    slug: string;
    content: string;
};

type NotesArray = Note[];

export const notesData: NotesArray = [
    {
        title: 'third note',
        date: '2024.03.01',
        slug: 'third-note',
        content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...',
    },
    {
        title: 'second note',
        date: '2024.02.01',
        slug: 'second-note',
        content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
    },
    {
        title: 'first note',
        date: '2024.01.01',
        slug: 'first-note',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
];
