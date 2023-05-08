const getSearchedBooks = async (title: string) => {
    const response = await fetch(`https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=B7CjiqLPsQ0A0ZddWbe4JGVlFHnRrJ9w&title=${title}`)
    return response.json()
};

export default getSearchedBooks;