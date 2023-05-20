import clientPromise from "@/lib/mongoConnect";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import GithubProvider from "next-auth/providers/github"
import Auth0Provider from 'next-auth/providers/auth0'

const authOptions = {
    adapter: MongoDBAdapter(clientPromise, { databaseName: 'nextauth-tutorial' }),
    providers: [
        Auth0Provider({ clientId: process.env.AUTH0_ID, clientSecret: process.env.AUTH0_SECRET, issuer: process.env.AUTH0_DOMAIN }),
        GithubProvider({ clientId: process.env.GITHUB_ID, clientSecret: process.env.GITHUB_SECRET }),
        EmailProvider({ from: 'websitemonitorweb@gmail.com', server: process.env.EMAIL_SERVER, maxAge: 3600 })
    ]
}

export default NextAuth(authOptions)