import getListBooks from '@/lib/getListBooks';
import Link from 'next/link';
import React from 'react';
import Book from './components/Book';

type Params = {
    params: {
        listName: string
    }
}

const ListName = async ({ params: { listName } }: Params) => {

    const listBooksData: Promise<ListBooks> = getListBooks(listName)
    const listBooks = await listBooksData
    
    return (
        <main style={{ padding: '20px' }}>
            <Link href="/lists" style={{ margin: '5px 0' }}>collections list</Link>
            <h1>{decodeURIComponent(listName)}</h1>
            <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', margin: '0 auto' }}>
                {listBooks.results.books?.map(book => {
                    return <Book key={book.amazon_product_url} author={book.author}
                        bookName={book.title} listName={listName} image={book.book_image} rank={book.rank} />
                })}
            </section>
        </main>
    );
};

export default ListName;    