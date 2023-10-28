import { IPost } from "@/lib/post/types";
import BoardPostRow from "../post-row/BoardPostRow";

interface IBoardBody {
	searchParams: string;
}

async function getBoardBodyDatas() {
	const res = await fetch(`${process.env.COMMUNITY_URL}/api/board`, {
	  method: 'GET',
	  cache: 'no-store',
	});
	const datas: IPost[] = await res.json();
  
	return datas;
  }

export default async function BoardBody() {
	const boardBodyDatas = await getBoardBodyDatas();

	return (
		<tbody>
        {boardBodyDatas.map((row) => (
          <BoardPostRow
            key={row.id}
            id={row.id}
            author={row.author}
            title={row.title}
            date={row.date}
          />
        ))}
      </tbody>
	)

	return
}