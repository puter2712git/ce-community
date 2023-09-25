import Board from '@/components/Board';
import Link from 'next/link';

export default async function BoardPage() {
  return (
    <div className="flex justify-center w-full h-auto mt-20">
      <div className="flex flex-col w-1/2 h-auto">
        <section className="flex justify-end items-center w-full h-auto">
          <Link
            href="/post"
            className="flex justify-center items-center py-px px-3 border border-solid border-black rounded-2xl"
          >
            새 글 쓰기
          </Link>
        </section>
        <Board />
      </div>
    </div>
  );
}
