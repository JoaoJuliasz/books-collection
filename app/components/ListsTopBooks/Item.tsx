import Link from 'next/link';
import React from 'react';
import CarouselItem from '../Carousel/CarouselItem';

type Props = {
    listName: string
    book: ListBook
}

const Item = ({ listName, book }: Props) => {
    return (
        <CarouselItem key={book.rank} width="auto">
            <Link href={`/lists/${listName}/${book.title}`} key={book.rank}>
                <img width={250} height={350} alt={book.title} src={book.book_image} />
                <h5>{book.title}</h5>
            </Link>
        </CarouselItem>
    );
};

export default Item;