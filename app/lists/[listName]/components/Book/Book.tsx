import React from 'react';
import Link from 'next/link';

import styles from './book.module.scss';

type Props = {
    bookName: string
    listName: string
    rank: number
    image: string
    author: string
}

const Book = ({ bookName, listName, image, rank, author }: Props) => {
    return (
        <Link className={styles.container}
            href={`/lists/${listName}/${bookName}`}>
            <img alt={bookName} src={image} />
            <div className={styles.bookName}>
                <h4>{rank}. {bookName}</h4>
                <h6>By {author}</h6>
            </div>
        </Link>
    );
};

export default Book;