import NextAuth, { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: {
      id: number;
      nickname: string;
      email: string;
      accessToken: string;
    };
  }
}
