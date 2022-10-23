import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log("HAHAHAHHAH")
      console.log(user)
      // Plug in mongodb here
      return true
    }
  },
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
}

export default NextAuth(authOptions)