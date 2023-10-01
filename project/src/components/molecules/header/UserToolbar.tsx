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
      attrs={{
        onClick: () => signOut(),
      }}
      type="primary"
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
          <Button type="primary" outline={false} text={true} fontSize="medium">
            로그인
          </Button>
        </Link>
      </li>
      <li>
        <Link href="/sign-up">
          <Button
            type="secondary"
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
