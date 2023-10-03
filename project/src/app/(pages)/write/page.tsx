'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function PostPage() {
  const { data: session } = useSession();
  const router = useRouter();

  function handleSubmit(e: any) {
    e.preventDefault();

    e.target.button.disabled = true;

    const title: string = e.target.title.value;
    const content: string = e.target.content.value;
    const id: number = session?.user.id!;

    fetch('/api/post', {
      method: 'POST',
      body: JSON.stringify({ title, content, id }),
    }).then((res) => {
      router.push('/posts');
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="제목" />
      <input type="text" name="content" placeholder="내용" />
      <input type="submit" name="button" value="업로드" />
    </form>
  );
}
