'use client';

import { useSession } from 'next-auth/react';
import UnsignedUserBar from './unsigned/UnsignedUserBar';

export default function UserBar() {
  const session = useSession();

  return (
    <div className="flex justify-end items-center h-full px-[20px]">
      <UnsignedUserBar />
    </div>
  );
}
