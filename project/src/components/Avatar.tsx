'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';

export default function Avatar() {
  const { data: session } = useSession();

  return (
    <div className="">
      {session ? (
        <div>{session?.user?.name}</div>
      ) : (
        <div>
          <Link href="sign-up">Sign Up</Link>
          <Link href="sign-in">Sign In</Link>
        </div>
      )}
    </div>
  );
}
