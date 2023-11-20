import getBookDetails from '@/lib/getBookDetails';
import React from 'react';

type Params = {
    params: {
        listName: string
        bookName: string
    }
}

const BookDetails = async ({ params: { listName, bookName } }: Params) => {
    const bookData: Promise<ListBook> = getBookDetails(listName, bookName)
    const book = await bookData

    return (
        <main style={{ display: 'flex', padding: '20px 0' }}>
            <section>
                <img src={book.book_image} alt="book image" />
            </section>
            <section>
                <div>
                    <h3>{book.title}</h3>
                    <h5>{book.author}</h5>
                </div>
                <div>
                    <p>{book.description}</p>
                </div>
                <div>
                    <h6>Places to buy the book</h6>
                    {book.buy_links.map(buy => (
                        <div key={buy.name}>
                            <a href={buy.url}>{buy.name}</a>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default BookDetails;