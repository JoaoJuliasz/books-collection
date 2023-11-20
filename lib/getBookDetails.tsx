import React from 'react';

const getBookDetails = async (listName: string, bookName: string) => {
    console.log(`http://localhost:3000/api/book-details?list=${listName}&book=${bookName}`)
    const response = await fetch(`http://localhost:3000/api/book-details?list=${listName}&book=${bookName}`)
    return response.json()
};

export default getBookDetails;