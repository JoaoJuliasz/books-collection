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
        <main>
            <h1>{book.title}</h1>
        </main>
    );
};

export default BookDetails;