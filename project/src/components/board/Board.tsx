import BoardPostRow from './post-row/BoardPostRow';

interface IBoardData {
  id: number;
  title: string;
  date: string;
  author: { nickname: string; loginId: string };
}

async function getBoardDatas() {
  const res = await fetch(`${process.env.COMMUNITY_URL}/api/board`, {
    method: 'GET',
    cache: 'no-store',
  });
  const datas: IBoardData[] = await res.json();

  datas.map(async (row) => {
    const formattedDate = new Date(row.date);
    row.date = `${formattedDate.getFullYear()}.${(formattedDate.getMonth() + 1)
      .toString()
      .padStart(2, '0')}.${formattedDate.getDate().toString().padStart(2, '0')}
		`;
  });

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
            postId={row.id}
            author={row.author}
            title={row.title}
            date={row.date}
          />
        ))}
      </tbody>
    </table>
  );
}
