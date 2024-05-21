import { authOptions, AuthOptions } from "../../../../utils/authOptions";
import NextAuth from "next-auth/next";
import nextAuth from "next-auth";

const handler = nextAuth(authOptions);

export { handler as GET, handler as POST };
