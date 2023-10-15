import Board from '@/components/board/Board';

export default function BoardPage() {
  return (
    <div className="flex justify-center w-full">
      <div className="w-1/2 min-w-[800px]">
        <Board />
      </div>
    </div>
  );
}
