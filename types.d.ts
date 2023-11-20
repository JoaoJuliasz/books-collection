type BestSellerList = {
    status: string
    copyright: string
    num_results: number,
    results: ListItem[]
}

type ListTopBooks = {
    status: string
    copyright: string
    num_results: number,
    results: {
        bestsellers_date: string
        published_date: string
        published_date_description: string
        next_published_date: string
        previous_published_date: string
        lists: ListTopBooksItem[]
    }
}

type ListTopBooksItem = {
    
    list_id: string
    list_name: string
    display_name: string
    list_image: string
    books: ListBook[]
}

type ListItem = {
    list_name: string
    display_name: string
    list_name_encoded: string
    oldest_published_date: string
    newest_published_date: string
    updated: string
}

type ListBooksResult = {
    list_name: string
    list_name_encoded: string
    bestsellers_date: string
    published_date: string
    published_date_description: string
    next_published_date: string
    previous_published_date: string
    display_name: string
    normal_list_ends_at: number,
    updated: string
    books: ListBook[]
}

type ListBooks = {
    status: string
    copyright: string
    num_results: number
    last_modified: string
    results: ListBooksResult
}

type ListBook = {
    rank: number
    rank_last_week: number
    weeks_on_list: number
    asterisk: number
    dagger: number
    primary_isbn10: string
    primary_isbn13: string
    publisher: string
    description: string
    price: string
    title: string
    author: string
    contributor: string
    contributor_note: string
    book_image: string
    book_image_width: number
    book_image_height: number
    amazon_product_url: string
    age_group: string
    book_review_link: string
    first_chapter_link: string
    sunday_review_link: string
    article_chapter_link: string
    isbns:
    {
        isbn10: string
        isbn13: string
    }[],
    buy_links: {
        name: string
        url: string
    }[],
    book_uri: string
}

type SearchData = {
    status: string
    copyright: string
    num_results: number
    results: selectedBook[]
}


type selectedBook = {
    title: string
    description: string
    contributor: string
    author: string
    contributor_note: string
    price: string
    age_group: string
    publisher: string
    isbns: [
        {
            isbn10: string
            isbn13: string
        },
        {
            isbn10: string
            isbn13: string
        }
    ],
    ranks_history: {
        primary_isbn10: string
        primary_isbn13: string
        rank: number,
        list_name: string
        display_name: string
        published_date: string
        bestsellers_date: string
        weeks_on_list: number
        rank_last_week: number
        asterisk: number
        dagger: number
    }[],
    reviews: [
        {
            book_review_link: string
            first_chapter_link: string
            sunday_review_link: string
            article_chapter_link: string
        }
    ]
}