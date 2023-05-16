import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";
import { hash } from 'bcryptjs';

export async function POST(request: Request) {
    // mongodb+srv://admin:aLwI3c9Rg1zdwkUx@cluster0.wlvhovp.mongodb.net/?retryWrites=true&w=majority

    const { username, password } = await request.json()

    if (!username || !password) {
        return new NextResponse(JSON.stringify({ message: 'Invalidat data' }), { status: 422 })
    }

    const client = await MongoClient.connect(process.env.MONGO_URL!)

    const db = client.db()

    const checkExisting = await db.collection('users').findOne({ username: username })

    if (checkExisting) {
        return new NextResponse(JSON.stringify({ message: 'username already exists!' }), { status: 422 })
    }

    const status = await db.collection('users').insertOne({
        username,
        password: await hash(password, 12)
    })

    client.close() 
    return NextResponse.json({ message: 'user created!', ...status })
}