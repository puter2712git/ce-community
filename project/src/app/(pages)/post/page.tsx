'use client';

import { useSession } from 'next-auth/react';

export default function PostPage() {
  const { data: session } = useSession();

  function handleSubmit(e: any) {
    e.preventDefault();

    const title: string = e.target.title.value;
    const content: string = e.target.content.value;
    const id: number = session?.user.id!;

    fetch('/api/post', {
      method: 'POST',
      body: JSON.stringify({ title, content, id }),
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="제목" />
      <input type="text" name="content" placeholder="내용" />
      <input type="submit" value="업로드" />
    </form>
  );
}
