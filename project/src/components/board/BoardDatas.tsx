import BoardPostRow from './post-row/BoardPostRow';

interface IBoardData {
  id: number;
  title: string;
  date: string;
  author: { nickname: string };
}

export default async function BoardDatas() {
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

  return (
    <>
      {datas.map((row) => (
        <BoardPostRow
          key={row.id}
          postId={row.id}
          author={row.author.nickname}
          title={row.title}
          date={row.date}
        />
      ))}
    </>
  );
}
