import PostTableToolbar from '@/components/molecules/post-table-head';
import PostTable from '@/components/organisms/post-table';
import PostTableButtonList from '@/components/organisms/post-table-button-list';

export default async function PostsPage({
  searchParams,
}: {
  searchParams: { id: string };
}) {
  if (!Object.keys(searchParams).includes('id')) {
    searchParams.id = '1';
  }

  return (
    <section className="flex flex-col justify-center items-center mt-40 gap-2">
      <PostTableToolbar />
      <article className="w-1/2 border border-solid border-black rounded-xl">
        <PostTable pageId={Number(searchParams.id)} />
      </article>
      <PostTableButtonList currentPageIndex={Number(searchParams.id)} />
    </section>
  );
}
