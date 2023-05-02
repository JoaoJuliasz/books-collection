import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
    bookName: string
    listName: string
    rank: number
    image: string
    author: string
}

const Book = ({ bookName, listName, image, rank, author }: Props) => {
    return (
        <Link style={{ margin: '7px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            href={`/lists/${listName}/${bookName}`}>
            <img width={150} height={150} alt={bookName} src={image} />
            <h4>{rank}. {bookName}</h4>
            <h6>By {author}</h6>
        </Link>
    );
};

export default Book;