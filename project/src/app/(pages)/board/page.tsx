import Board from '@/components/board/Board';
import BoardToolbar from '@/components/board/toolbar/BoardToolbar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Board',
};

export default function BoardPage({
  searchParams,
}: {
  searchParams: { [search: string]: string };
}) {
	const keys = Object.keys(searchParams);
	let query = '?';

	for (let i = 0; i < keys.length; i++) {
		const key = keys[i];
		const value = searchParams[key];

		query += `${key}=${value}`
	}

  return (
    <div className="mt-[80px] flex w-full justify-center">
      <div className="w-[90%] max-w-[800px] space-y-3 sm:w-1/2">
        <BoardToolbar />
        <Board searchParams={query} />
      </div>
    </div>
  );
}
