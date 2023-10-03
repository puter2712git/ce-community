import PostTableToolbar from '@/components/molecules/post-table-toolbar';
import PostTable from '@/components/organisms/post-table';

export default function BoardTemplate() {
  return (
    <section className="flex flex-col justify-center items-center mt-40 gap-2">
      <PostTableToolbar />
      <article className="w-1/2 border border-solid border-black rounded-xl">
        <PostTable />
      </article>
    </section>
  );
}
