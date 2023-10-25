import Board from '@/components/board/Board';
import BoardToolbar from '@/components/board/toolbar/BoardToolbar';

export default function BoardPage() {
  return (
    <div className="mt-[80px] flex w-full justify-center">
      <div className="w-[90%] max-w-[800px] space-y-3 sm:w-1/2">
        <BoardToolbar />
        <Board />
      </div>
    </div>
  );
}
