import { IPost, UserData } from '@/app/api/posts/route';
import PostRow from '@/components/molecules/post-row';

interface IPostTable {
  pageId: number;
}

export default async function PostTable(props: IPostTable) {
  const postsRes = await fetch(`${process.env.COMMUNITY_URL}/api/posts`, {
    method: 'POST',
    body: JSON.stringify({ pageId: props.pageId }),
    cache: 'no-store',
  });
  const postsData: IPost[] = await postsRes.json();

  postsData.map(async (row) => {
    const formattedDate = new Date(row.date);
    row.date = `${formattedDate.getFullYear()}.${(formattedDate.getMonth() + 1)
      .toString()
      .padStart(2, '0')}.${formattedDate.getDate().toString().padStart(2, '0')}
	`;
  });

  return (
    <table className="w-full table-fixed">
      <thead>
        <tr className="text-lg border-b border-solid border-gray-300">
          <th className="py-4 w-2/12">작성자</th>
          <th className="w-8/12">제목</th>
          <th className="w-2/12">날짜</th>
        </tr>
      </thead>
      <tbody>
        {postsData.map((row) => (
          <PostRow
            key={row.id}
            post_id={row.id}
            title={row.title}
            date={row.date}
            author={row.author.name}
          />
        ))}
      </tbody>
    </table>
  );
}
