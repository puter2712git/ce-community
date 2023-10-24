import { IPost } from '@/lib/post/types';
import { getFormattedDate } from '@/lib/utils';
import Link from 'next/link';

export default function BoardPostRow(
  props: Omit<IPost, 'content' | 'authorId' | 'like'>,
) {
  const date = getFormattedDate(props.date);

  return (
    <tr className="board-row">
      <td className="text-center px-2">
        <Link
          href={`/avatar/${props.author.loginId}`}
          className="hover:underline text-primary"
        >
          {props.author.nickname}
        </Link>
      </td>
      <td className="px-5 truncate text-ellipsis">
        <Link href={`/post/${props.id}`} className="hover:underline">
          {props.title}
        </Link>
      </td>
      <td className="text-center py-2 px-2">{date}</td>
    </tr>
  );
}
