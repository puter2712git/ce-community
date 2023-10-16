import Link from 'next/link';

export default function BoardToolbar() {
  return (
    <section className="flex justify-between items-center w-full">
      <Link
        href="/write"
        className="px-3 py-2 border border-secondary border-solid rounded-[5px] text-m"
      >
        새 글쓰기
      </Link>
    </section>
  );
}
