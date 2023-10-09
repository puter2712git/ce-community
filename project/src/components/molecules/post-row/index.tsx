import Link from 'next/link';

interface PostRowProps {
  post_id: number;
  author: string;
  title: string;
  date: string;
}

export default function PostRow(props: PostRowProps) {
  return (
    <tr className="board-row">
      <td className="text-center px-2">{props.author}</td>
      <td className="px-5 truncate text-ellipsis">
        <Link href={`/posts/${props.post_id}`} className="hover:underline">
          {props.title}
        </Link>
      </td>
      <td className="text-center py-2 px-2">{props.date}</td>
    </tr>
  );
}
