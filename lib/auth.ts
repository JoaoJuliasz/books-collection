import { compare } from "bcryptjs";
import { MongoClient } from "mongodb";
import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                const { username, password } = credentials as any
                if (!username || !password) {
                    throw new Error('Invalid data')
                }
                const client = await MongoClient.connect(process.env.MONGO_URL!)

                const result = await client.db().collection('users').findOne({ username: username })
                if (!result) {
                    client.close()
                    throw new Error('username or password invalid!')
                }

                const checkPassword = await compare(password, result.password)
                if (!checkPassword) {
                    client.close()
                    throw new Error('username or password invalid!')
                }

                const user: { user: string, id: string } = { user: result.username, id: String(result._id) }
                client.close()
                return user
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id
            }
            return token
        },
        async session({ session, token }) {
            if(session.user) {
                session.user.id = token.id as string
                session.user.name = token.name
            }
            return session
        }
    },
    jwt: {
        secret: 'aklmkxcvdgqweqwe'
    },
    pages: {
        signIn: '/login'
    },
    session: {
        strategy: 'jwt'
    }
}