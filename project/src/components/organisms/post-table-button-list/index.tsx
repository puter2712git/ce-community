import Link from 'next/link';

interface IPageTableButtonList {
  currentPageIndex: number;
}

export default function PostTableButtonList(props: IPageTableButtonList) {
  const currentPageIndex = props.currentPageIndex;

  return (
    <section className="flex justify-center items-center w-full gap-5 text-m">
      {/* 이전 페이지 버튼 */}
      <Link
        href={{
          pathname: '/posts',
          query: { id: currentPageIndex - 1 },
        }}
        className={currentPageIndex === 1 ? 'pointer-events-none' : ''}
      >
        &lt;
      </Link>

      {/* 현재 페이지 */}
      <div>{currentPageIndex}</div>

      {/* 다음 페이지 버튼 */}
      <Link href={{ pathname: '/posts', query: { id: currentPageIndex + 1 } }}>
        &gt;
      </Link>
    </section>
  );
}
