import getListBooks from '@/lib/getListBooks';
import Link from 'next/link';
import Book from './components/Book/Book';
import styles from './listName.module.scss';

type Params = {
    params: {
        listName: string
    }
}

const ListName = async ({ params: { listName } }: Params) => {

    const listBooksData: Promise<ListBooks> = getListBooks(listName)
    const listBooks = await listBooksData
    
    return (
        <main className={styles.container}>
            <Link href="/lists" style={{ margin: '5px 0' }}>collections list</Link>
            <h1 className={styles.title}>{listBooks.results.list_name}</h1>
            <section className={styles.wrapper}>
                {listBooks.results.books?.map(book => {
                    return <Book key={book.amazon_product_url} author={book.author}
                        bookName={book.title} listName={listName} image={book.book_image} rank={book.rank} />
                })}
            </section>
        </main>
    );
};

export default ListName;    