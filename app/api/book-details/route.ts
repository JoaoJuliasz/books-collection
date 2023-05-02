import getListBooks from "@/lib/getListBooks";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const list = searchParams.get('list') || ""
    const listBooks: ListBooks = await getListBooks(list)
    const bookName = searchParams.get('book') || ""
    const selectedBook = listBooks.results.books.filter(bookInfos => bookInfos.title === bookName)[0]
    return NextResponse.json(selectedBook)
}
