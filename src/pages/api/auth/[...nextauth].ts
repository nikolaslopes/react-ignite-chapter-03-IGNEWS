import { query } from 'faunadb'

import NextAuth from 'next-auth/next'
import GitHubProvider from 'next-auth/providers/github'

import { fauna } from '../../../services/fauna'

export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      const { email } = user

      await fauna.query(
        query.Create(query.Collection('users'), { data: { email } })
      )

      return true
    },
  },
})
