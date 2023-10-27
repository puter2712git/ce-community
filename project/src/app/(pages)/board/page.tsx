import Board from '@/components/board/Board';
import BoardToolbar from '@/components/board/toolbar/BoardToolbar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Board',
};

export default function BoardPage({
  searchParams,
}: {
  searchParams: Record<string, string>;
}) {
  return (
    <div className="mt-[80px] flex w-full justify-center">
      <div className="w-[90%] max-w-[800px] space-y-3 sm:w-1/2">
        <BoardToolbar />
        <Board searchParams={searchParams} />
      </div>
    </div>
  );
}
