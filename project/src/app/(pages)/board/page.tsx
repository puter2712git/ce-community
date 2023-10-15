import Board from '@/components/board/Board';

export default function BoardPage(props: any) {
  return (
    <div className="flex justify-center w-full">
      <article className="w-1/2 max-w-[1200px]">
        <Board />
      </article>
    </div>
  );
}
