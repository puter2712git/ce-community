import Post from '@/components/post/Post';

export default function PostPage({ params }: { params: { id: number } }) {
  return (
    <div className="mt-[100px] flex w-full justify-center">
      <section className="w-[90%] max-w-[800px] sm:w-1/2">
        <Post postId={params.id} />
      </section>
    </div>
  );
}
