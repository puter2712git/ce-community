import Board from '@/components/board/Board';
import BoardToolbar from '@/components/board/toolbar/BoardToolbar';

export default function BoardPage() {
  return (
    <div className="flex justify-center w-full mt-[80px]">
      <div className="w-[90%] sm:w-1/2 max-w-[800px] space-y-3">
        <BoardToolbar />
        <Board />
      </div>
    </div>
  );
}
