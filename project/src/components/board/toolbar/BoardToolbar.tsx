import Link from 'next/link';
import BoardSearchbar from './BoardSearchbar';

export default function BoardToolbar() {
  return (
    <section className="flex w-full items-center justify-between">
      <Link
        href="/write"
        className="rounded-[5px] border border-solid border-secondary px-3 py-2 text-m"
      >
        새 글쓰기
      </Link>
      <BoardSearchbar />
    </section>
  );
}
