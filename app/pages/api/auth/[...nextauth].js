import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      const { MongoClient, ServerApiVersion } = require('mongodb');
      const uri = "mongodb+srv://<username>:<password>@hypertension-cluster.vkdattq.mongodb.net/?retryWrites=true&w=majority";
      const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
      client.connect(err => {
        const collection = client.db("auth").collection("users");
        console.log(collection)
        // perform actions on the collection object
        client.close();
      });

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