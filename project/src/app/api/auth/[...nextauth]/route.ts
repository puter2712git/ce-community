import { AuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { NextResponse } from 'next/server';

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        loginId: {
          label: '이메일',
          type: 'text',
          placeholder: 'example@ajou.ac.kr',
        },
        password: { label: '비밀번호', type: 'password' },
      },
      async authorize(credentials, req) {
        const res = await fetch(
          `${process.env.NEXTAUTH_URL}/api/auth/sign-in`,
          {
            method: 'POST',
            body: JSON.stringify({
              loginId: credentials?.loginId,
              password: credentials?.password,
            }),
          },
        );

        if (!res.ok) {
          throw new Error('아이디 또는 비밀번호가 일치하지 않습니다.');
        }

        const user = await res.json();
        return user;
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },

    async session({ session, token }) {
      session.user = token as any;
      return session;
    },
  },

  pages: {
    signIn: '/sign-in',
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
