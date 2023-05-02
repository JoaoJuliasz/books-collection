const getListBooks = async (list: string) => {
    const response = await fetch(`https://api.nytimes.com/svc/books/v3/lists/current/${list}.json?api-key=B7CjiqLPsQ0A0ZddWbe4JGVlFHnRrJ9w&list=${list}`)
    return response.json()
};

export default getListBooks;