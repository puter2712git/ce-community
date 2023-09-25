'use client';

import { verifyJwt } from '@/lib/jwt';
import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';

export default function UserInfo() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return session ? (
    <button
      className="flex justify-center items-center border-solid border border-gray-600 rounded-2xl px-2 py-1 bg-neutral-100 ml-5"
      onClick={() => signOut()}
    >
      로그아웃
    </button>
  ) : (
    <ul className="flex flex-row justify-end items-center">
      <li>
        <Link
          href="sign-in"
          className="flex justify-center items-center border-solid border border-gray-600 rounded-2xl px-2 py-1 bg-neutral-100 ml-5"
        >
          로그인
        </Link>
      </li>
      <li>
        <Link
          href="sign-up"
          className="flex justify-center items-center border-solid border border-gray-600 rounded-2xl px-2 py-1 bg-neutral-100 ml-5"
        >
          회원가입
        </Link>
      </li>
    </ul>
  );
}
