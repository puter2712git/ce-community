import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';

const handler = NextAuth({
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
        const user = await res.json();
        console.log(user);

        if (user.status === 401) {
          return null;
        }

        if (user) {
          return user;
        } else {
          return null;
        }
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
});

export { handler as GET, handler as POST };
