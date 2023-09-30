'use client';

import Button from '@/components/atoms/Button';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

export default function UserToolbar() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return null;
  }

  return session ? (
    <Button
      props={{
        isOutline: false,
        color: 'secondary',
        size: 'sm',
      }}
      onClick={() => signOut()}
    >
      로그아웃
    </Button>
  ) : (
    <ul className="flex flex-row gap-3 justify-center items-center">
      <li>
        <Link href="/sign-in">
          <Button
            props={{
              isOutline: false,
              color: 'primary',
              size: 'sm',
            }}
          >
            로그인
          </Button>
        </Link>
      </li>
      <li>
        <Link href="/sign-up">
          <Button
            props={{
              isOutline: false,
              color: 'secondary',
              size: 'sm',
            }}
          >
            회원가입
          </Button>
        </Link>
      </li>
    </ul>
  );
}
