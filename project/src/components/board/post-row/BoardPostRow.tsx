import Link from 'next/link';

interface IBoardPostRow {
  postId: number;
  author: {
    nickname: string;
    loginId: string;
  };
  title: string;
  date: string;
}

export default function BoardPostRow(props: IBoardPostRow) {
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
        <Link href={`/post/${props.postId}`} className="hover:underline">
          {props.title}
        </Link>
      </td>
      <td className="text-center py-2 px-2">{props.date}</td>
    </tr>
  );
}
