'use client';

import { useSession } from 'next-auth/react';

import UserSlider from './signed/UserSlider';
import UnsignedUserBar from './unsigned/UnsignedUserBar';

export default function UserBar() {
  const session = useSession();

  if (session.status === 'loading') {
    return (
      <div className="flex justify-end items-center h-full px-[20px]">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex justify-end items-center h-full px-[20px]">
      {session.status === 'authenticated' ? (
        <UserSlider />
      ) : (
        <UnsignedUserBar />
      )}
    </div>
  );
}
