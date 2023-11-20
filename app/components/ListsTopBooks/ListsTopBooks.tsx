'use client'
import Item from "./Item";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { useCallback } from "react";

type Props = {
    topBooks: ListTopBooks
}

const ListsTopBooks = ({ topBooks }: Props) => {

    const getSlidesPerView = useCallback(() => {
        const windowWidth = window.innerWidth
        if(windowWidth > 1100) return 4
        if(windowWidth > 800) return 3
        if(windowWidth > 600) return 2
        if(windowWidth > 500) return 1
    }, [])

    console.warn(topBooks)

    return (
        <>
            {
                topBooks.results?.lists?.splice(0, 4).map(section => {
                    return (
                        <section key={section.list_id} style={{ margin: '4px' }}>
                            <h3 style={{ margin: '1rem 0.7rem', color: '#858585' }}>{section.list_name}</h3>
                            <ul style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                                <Swiper slidesPerView={getSlidesPerView()}>
                                    {
                                        section.books.map(book => {
                                            return (
                                                <SwiperSlide key={book.rank}>
                                                    <Item listName={section.list_name} book={book} key={book.rank} />
                                                </SwiperSlide>
                                            )
                                        })
                                    }
                                </Swiper>
                            </ul>
                        </section>
                    )
                })
            }
        </>
    );
};

export default ListsTopBooks;