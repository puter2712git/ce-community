import { IPost } from '@/lib/post/types';
import { getFormattedDate } from '@/lib/utils';
import Link from 'next/link';

export default function BoardPostRow(
  props: Omit<IPost, 'content' | 'authorId' | 'like'>,
) {
  const date = getFormattedDate(props.date);

  return (
    <tr className="board-row">
      <td className="px-2 text-center">
        <Link
          href={`/avatar/${props.author.loginId}`}
          className="text-primary hover:underline"
        >
          {props.author.nickname}
        </Link>
      </td>
      <td className="truncate text-ellipsis px-5">
        <Link href={`/post/${props.id}`} className="hover:underline">
          {props.title}
        </Link>
      </td>
      <td className="px-2 py-2 text-center">{date}</td>
    </tr>
  );
}
