import Link from 'next/link';
import React from 'react';
import CarouselItem from '../Carousel/CarouselItem';

import styles from './item.module.scss'

type Props = {
    listName: string
    book: ListBook
}

const Item = ({ listName, book }: Props) => {
    return (
        <CarouselItem key={book.rank} width="auto">
            <Link href={`/lists/${listName}/${book.title}`} key={book.rank} className={styles.container}>
                {book.book_image ?
                    <img width={250} height={350} alt={book.title} src={book.book_image} />
                    : <div className={styles.noImg}>No Image</div>
                }
                <h5 style={{ whiteSpace: 'break-spaces', textAlign: 'center' }}>{book.title}</h5>
            </Link>
        </CarouselItem>
    );
};

export default Item;