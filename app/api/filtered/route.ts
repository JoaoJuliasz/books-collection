import getSearchedBooks from "@/lib/getSearchedBooks";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get('title') || ""
    const searchedBooks: any = await getSearchedBooks(title)
    const selectedBook = searchedBooks.results.slice(0, 5)
    return NextResponse.json(selectedBook)
}
