import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";
import { compare } from 'bcryptjs';

export async function POST(request: Request) {
    const { username, password } = await request.json()

    if (!username || !password) {
        return new NextResponse(JSON.stringify({ message: 'Invalidat data' }), { status: 422 })
    }

    const client = await MongoClient.connect(process.env.MONGO_URL!)

    const db = client.db()

    const result = await db.collection('users').findOne({ username: username })

    if (!result) {
        return new NextResponse(JSON.stringify({ message: 'username or password invalid!' }))
    }

    const checkPassword = await compare(password, result.password)

    if (!checkPassword) {
        return new NextResponse(JSON.stringify({ message: 'username or password invalid!' }))
    }

    client.close()
    return NextResponse.json({ username: result.username, id: result._id })
    // return NextResponse.json({params})
}