const getBestSellersList = async () => {
    const response = await fetch(`https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=B7CjiqLPsQ0A0ZddWbe4JGVlFHnRrJ9w`)
    return response.json()
};

export default getBestSellersList;