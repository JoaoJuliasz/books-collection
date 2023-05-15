import Carousel from "../Carousel/Carousel";
import Item from "./Item";

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
                            <h3 style={{ margin: '1rem 0.7rem', color: '#858585' }}>{section.list_name}</h3>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                                <Carousel>
                                    {
                                        section.books.map(book => {
                                            return (
                                                <Item listName={section.list_name} book={book} key={book.rank} />
                                            )
                                        })
                                    }
                                </Carousel>
                            </div>
                        </section>
                    )
                })
            }
        </>
    );
};

export default ListsTopBooks;