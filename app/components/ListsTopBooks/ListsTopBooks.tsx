import Link from "next/link";

type Props = {
    topBooks: ListTopBooks
}

const ListsTopBooks = ({ topBooks }: Props) => {
    return (
        <>
            {
                topBooks.results?.lists?.splice(0, 4).map(section => {
                    return (
                        <section key={section.list_id} style={{ margin: '4px' }}>
                            <h3 style={{ margin: '1rem 0' }}>{section.list_name}</h3>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                                {
                                    section.books.map(book => {
                                        return (
                                            <Link href={`/lists/${section.list_name}/${book.title}`} key={book.rank} style={{ width: '20%', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                                                <img width={150} height={150} alt={book.title} src={book.book_image} />
                                                <h5>{book.title}</h5>
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                        </section>
                    )
                })
            }
        </>
    );
};

export default ListsTopBooks;