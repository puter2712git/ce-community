'use client';

import { UserIcon } from '@heroicons/react/24/solid';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { useState } from 'react';

export default function UserSlider() {
  const [isSlided, setIsSlided] = useState(false);

  return (
    <div className="relative flex h-full flex-col items-center justify-center ">
      <UserIcon
        className="h-5/6 cursor-pointer rounded-[50%] border border-solid border-black p-1"
        onClick={() => setIsSlided(!isSlided)}
      />
      <div
        className={`absolute top-14 h-auto w-60 border border-solid ${
          isSlided ? '' : 'hidden'
        }`}
      >
        <ul>
          <li>
            <Link
              href="/config"
              className="flex w-full select-none items-center justify-center border-b border-solid border-gray-300 px-3 py-3 text-m"
            >
              설정
            </Link>
          </li>
          <li>
            <button
              className="flex w-full select-none items-center justify-center px-3 py-3 text-m"
              onClick={() => signOut()}
            >
              로그아웃
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
