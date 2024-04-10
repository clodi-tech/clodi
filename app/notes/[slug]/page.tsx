export default async function Page({ params }: { params: { slug: string } }) {
    return (
        <main>
            slug: {params.slug}
        </main>
    );
}