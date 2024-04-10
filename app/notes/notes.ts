type Chapter = {
    title: string;
    content: string;
    image: string;
};

type Note = {
    title: string;
    date: string;
    slug: string;
    content: Chapter[];
};

type NotesArray = Note[];

const defaultContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

export const notesData: NotesArray = [
    {
        title: 'third note',
        date: '2024.03.01',
        slug: 'third-note',
        content: [
            {
                title: 'chapter 3.1',
                content: defaultContent,
                image: 'https://via.placeholder.com/150',
            },
            {
                title: 'chapter 3.2',
                content: defaultContent,
                image: 'https://via.placeholder.com/150',
            },
        ]
    },
    {
        title: 'second note',
        date: '2024.02.01',
        slug: 'second-note',
        content: [
            {
                title: 'chapter 2.1',
                content: defaultContent,
                image: 'https://via.placeholder.com/150',
            },
            {
                title: 'chapter 2.2',
                content: defaultContent,
                image: 'https://via.placeholder.com/150',
            },
        ]
    },
    {
        title: 'first note',
        date: '2024.01.01',
        slug: 'first-note',
        content: [
            {
                title: 'chapter 1.1',
                content: defaultContent,
                image: 'https://via.placeholder.com/150',
            },
            {
                title: 'chapter 1.2',
                content: defaultContent,
                image: 'https://via.placeholder.com/150',
            },
        ]
    },
];
