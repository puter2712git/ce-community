import { IPost } from '@/lib/post/types';
import BoardPostRow from './post-row/BoardPostRow';

async function getBoardDatas() {
  const res = await fetch(`${process.env.COMMUNITY_URL}/api/board`, {
    method: 'GET',
    cache: 'no-store',
  });
  const datas: Omit<IPost, 'authorId'>[] = await res.json();

  return datas;
}

export default async function Board() {
  const boardDatas = await getBoardDatas();

  return (
    <table className="w-full border border-primary border-solid">
      <thead>
        <tr className="text-lg border-b border-solid border-gray-300">
          <th className="py-4 w-2/12">작성자</th>
          <th className="w-8/12">제목</th>
          <th className="w-2/12">날짜</th>
        </tr>
      </thead>
      <tbody>
        {boardDatas.map((row) => (
          <BoardPostRow
            key={row.id}
            id={row.id}
            author={row.author}
            title={row.title}
            date={row.date}
          />
        ))}
      </tbody>
    </table>
  );
}
