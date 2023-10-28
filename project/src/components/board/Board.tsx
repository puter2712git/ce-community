import { IPost } from '@/lib/post/types';
import BoardPostRow from './post-row/BoardPostRow';
import BoardBody from './board-body/BoardBody';
import { Suspense } from 'react';

interface IBoard {
  searchParams: string;
}

export default async function Board() {
  return (
    <table className="w-full border border-solid border-primary">
      <thead>
        <tr className="border-b border-solid border-gray-300 text-lg">
          <th className="w-3/12 py-4">작성자</th>
          <th className="w-6/12">제목</th>
          <th className="w-3/12">날짜</th>
        </tr>
      </thead>
	  <Suspense>
		<BoardBody />
	  </Suspense>
    </table>
  );
}
