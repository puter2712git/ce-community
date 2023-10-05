import Link from 'next/link';
import { Suspense } from 'react';
import PostRowAuthor from './author';

interface PostRowProps {
  post_id: number;
  user_id: number;
  title: string;
  date: string;
}

export default function PostRow(props: PostRowProps) {
  return (
    <tr className="board-row">
      <td className="text-center px-2">
        <Suspense fallback={<div>Loading...</div>}>
          <PostRowAuthor user_id={props.user_id} />
        </Suspense>
      </td>
      <td className="px-5">
        <Link href={`/posts/${props.post_id}`} className="hover:underline">
          {props.title}
        </Link>
      </td>
      <td className="text-center py-2 px-2">{props.date}</td>
    </tr>
  );
}
