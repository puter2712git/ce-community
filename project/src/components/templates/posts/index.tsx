import PostTable from '@/components/organisms/post-table';

export default function BoardTemplate() {
  return (
    <section className="flex justify-center items-center mt-40">
      <article className="w-1/2 border border-solid border-black rounded-xl">
        <PostTable />
      </article>
    </section>
  );
}
