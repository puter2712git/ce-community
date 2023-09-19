'use client';

import { signOut, useSession } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();

  return (
    <main>
      <button onClick={() => signOut()}>Sign out</button>
    </main>
  );
}
