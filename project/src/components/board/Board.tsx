import { IPost } from '@/lib/post/types';
import BoardPostRow from './post-row/BoardPostRow';

interface IBoard {
  searchParams: string;
}

async function getBoardDatas(searchParams: string) {
  const res = await fetch(`${process.env.COMMUNITY_URL}/api/board/${searchParams}`, {
    method: 'GET',
    cache: 'no-store',
  });
  const datas: IPost[] = await res.json();

  return datas;
}

export default async function Board(props: IBoard) {
  const boardDatas = await getBoardDatas(props.searchParams);

  return (
    <table className="w-full border border-solid border-primary">
      <thead>
        <tr className="border-b border-solid border-gray-300 text-lg">
          <th className="w-3/12 py-4">작성자</th>
          <th className="w-6/12">제목</th>
          <th className="w-3/12">날짜</th>
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
