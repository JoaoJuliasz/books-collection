import getSearchedBooks from "@/lib/getSearchedBooks";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get('title') || ""
    const searchedBooks: SearchData = await getSearchedBooks(title)
    const selectedBook = searchedBooks.results.filter(book => book.ranks_history.length > 0).slice(0, 5)
    return NextResponse.json(selectedBook)
}
