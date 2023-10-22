export { default } from 'next-auth/middleware';

export const config = {
  matcher: ['/avatar/:path*', '/write/:path*'],
};
