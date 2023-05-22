import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";
import { hash } from 'bcryptjs';

export async function POST(request: Request, response: Response) {
    const { username, password } = await request.json()

    if (!username || !password) {
        return new NextResponse(JSON.stringify({ message: 'Invalidat data' }), { status: 422 })
    }

    const client = await MongoClient.connect(process.env.MONGO_URL!)

    const db = client.db()

    const checkExisting = await db.collection('users').findOne({ username: username })

    if (checkExisting) {
        return new NextResponse(JSON.stringify({ error: 'username already exists!' }), { status: 400 })
    }

    const status = await db.collection('users').insertOne({
        username,
        password: await hash(password, 12)
    })

    client.close() 
    return NextResponse.json({ message: 'user created!', ...status })
}