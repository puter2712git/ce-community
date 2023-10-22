'use client';

import { UserIcon } from '@heroicons/react/24/solid';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { useState } from 'react';

export default function UserSlider() {
  const [isSlided, setIsSlided] = useState(false);

  return (
    <div className="relative flex flex-col justify-center items-center h-full ">
      <UserIcon
        className="h-5/6 border border-black border-solid rounded-[50%] p-1 cursor-pointer"
        onClick={() => setIsSlided(!isSlided)}
      />
      <div
        className={`absolute w-60 h-auto border border-solid top-14 ${
          isSlided ? '' : 'hidden'
        }`}
      >
        <ul>
          <li>
            <Link
              href="/config"
              className="flex justify-center items-center w-full px-3 py-3 text-m border-b border-solid border-gray-300 select-none"
            >
              설정
            </Link>
          </li>
          <li>
            <button
              className="flex justify-center items-center w-full px-3 py-3 text-m select-none"
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
