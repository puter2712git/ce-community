import { PostData, UserData } from '@/app/api/posts/route';
import PostRow from '@/components/molecules/post-row';
import { Suspense } from 'react';

export default async function PostTable() {
  const postsRes = await fetch('http://localhost:3000/api/posts', {
    method: 'GET',
    cache: 'no-store',
  });
  const postsData: PostData[] = await postsRes.json();

  const fetchUserPromises = postsData.map(async (row) => {
    const formattedDate = new Date(row.date);
    row.date = `${formattedDate.getFullYear()}.${(formattedDate.getMonth() + 1)
      .toString()
      .padStart(2, '0')}.${formattedDate.getDate().toString().padStart(2, '0')}
	`;

    const userRes = await fetch('http://localhost:3000/api/posts', {
      method: 'POST',
      body: JSON.stringify({ id: row.user_id }),
    });
    const userData: UserData[] = await userRes.json();

    row.author = userData[0].name;
  });

  await Promise.all(fetchUserPromises);

  return (
    <table className="w-full">
      <thead>
        <tr className="text-lg border-b border-solid border-gray-300">
          <th className="py-4">작성자</th>
          <th>제목</th>
          <th>날짜</th>
        </tr>
      </thead>
      <tbody>
        {postsData.map((row) => (
          <PostRow
            key={row.id}
            post_id={row.id}
            title={row.title}
            date={row.date}
            author={row.author}
          />
        ))}
      </tbody>
    </table>
  );
}
