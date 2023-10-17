import { getServerSession } from 'next-auth';
import UserSlider from './signed/UserSlider';
import UnsignedUserBar from './unsigned/UnsignedUserBar';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export default async function UserBar() {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex justify-end items-center h-full px-[20px]">
      {session?.user ? <UserSlider /> : <UnsignedUserBar />}
    </div>
  );
}
