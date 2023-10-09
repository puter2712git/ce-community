'use client';

import Button from '@/components/atoms/button';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

export default function UserToolbar() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return session ? (
    <Button
      onClick={() => signOut()}
      variant="primary"
      outline={false}
      text={true}
      fontSize="medium"
    >
      로그아웃
    </Button>
  ) : (
    <ul className="flex flex-row gap-3 justify-center items-center">
      <li>
        <Link href="/sign-in">
          <Button
            variant="primary"
            outline={false}
            text={true}
            fontSize="medium"
          >
            로그인
          </Button>
        </Link>
      </li>
      <li>
        <Link href="/sign-up">
          <Button
            variant="secondary"
            outline={false}
            text={true}
            fontSize="medium"
          >
            회원가입
          </Button>
        </Link>
      </li>
    </ul>
  );
}
