import NextAuth, { NextAuthOptions } from 'next-auth'
import Providers from 'next-auth/providers'
import Adapters from 'next-auth/adapters'
import { NextApiHandler } from 'next'
import prisma from '../../../lib/prisma'

const options: NextAuthOptions = {
    providers: [
        Providers.GitHub({
            clientId: '',
            clientSecret: ''
        })
    ],
    adapter: Adapters.Prisma.Adapter({ prisma })
}

// this file is simply an api route -- so give it a handler
const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options)

export default authHandler
