import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { connectDB } from '../../../../libs/mongodb';
import User from '../../../../models/user';
import bcrypt from 'bcryptjs';
export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      id: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        await connectDB();
        const userFound = await User.findOne({
          email: credentials.email,
        }).select('+password');

        if (!userFound) throw new Error('Credenciales inválidas');

        const passwordMatch = await bcrypt.compare(
          credentials.password,
          userFound.password
        );

        if (!passwordMatch) throw new Error('Credenciales inválidas');

        return userFound;
      },
    }),
  ],
  pages: {
    signIn: '/site/login',
  },
  session: {
    strategy: 'jwt',
    maxAge: 1 * 60 * 60,
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const userParsed = { email: user.email, _id: user._id };
        token.user = userParsed;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token.user;
      return session;
    },
  },
};
// const handler = NextAuth({

// });

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
