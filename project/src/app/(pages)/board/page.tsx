import Button from '@/components/atoms/Button';
import Link from 'next/link';
import { Suspense } from 'react';

interface Post {
  author: string;
  title: string;
  content: string;
}

export default async function BoardPage() {
  const res = await fetch('http://localhost:3000/api/board', {
    method: 'GET',
    cache: 'no-store',
  });
  const postDatas: {
    id: number;
    title: string;
    content: string;
    user_id: string;
  }[] = await res.json();

  let posts: Post[] = [];

  for (const post of postDatas) {
    const userRes = await fetch('http://localhost:3000/api/board', {
      method: 'POST',
      body: JSON.stringify({ id: post.user_id }),
      cache: 'no-store',
    });
    const user = await userRes.json();

    posts.push({
      author: user[0].name,
      title: post.title,
      content: post.content,
    });
  }

  return (
    <div className="flex justify-center w-full h-auto mt-20">
      <div className="flex flex-col w-1/2 h-auto">
        <section className="flex justify-end items-center w-full h-auto">
          <Link href="/post">
            <Button
              props={{
                isOutline: true,
                color: 'primary',
                size: 'lg',
              }}
            >
              새 글 쓰기
            </Button>
          </Link>
        </section>
        <Suspense fallback={<p>Loading posts...</p>}>
          {posts.map((post, index) => (
            <li key={index}>
              {post.author} {post.title} {post.content}
            </li>
          ))}
        </Suspense>
      </div>
    </div>
  );
}
