import connectDB from "../config/database";
import User from "../models/User";
import GoogleProvider from "next-auth/providers/google";
import { fetchMemberbyEmail } from "./requests";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],

  callbacks: {
    //Invoked on successfull signin
    async signIn({ profile }) {
      //1. connect DB
      await connectDB();
      //2. check if the user exists
      const userExists = await User.findOne({ email: profile.email });
      const memberExists = await fetchMemberbyEmail(profile.email);
      console.log("Estoy validando usuario: ", profile.email);

      console.log("Usuario: ", memberExists.length);
      //2. si sólo es para ingresar, y el usuario no se encuentra no dejarlo seguir
      if (memberExists.length === 0) {
        console.log("authoptions: ", memberExists);
        return false;
      }

      //3. if not add user to DB
      if (!userExists && memberExists) {
        //Truncate user name if too long
        const username = profile.name.slice(0, 20);

        await User.create({
          email: profile.email,
          username,
          image: profile.picture,
        });
      }
      //4. return true to allow sign in
      return true;
    },
    //Modifies the session object
    async session({ session }) {
      //1. Get user from DB
      const user = await User.findOne({ email: session.user.email });
      //2. Assign the user id to the session
      session.user.id = user._id.toString();
      //3. Return the session
      console.log("Session en authoptions", user.email);
      return session;
    },
  },
};
