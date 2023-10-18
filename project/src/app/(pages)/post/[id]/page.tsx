import Post from '@/components/post/Post';

export default function PostPage({ params }: { params: { id: number } }) {
  return (
    <div className="flex justify-center w-full mt-[100px]">
      <section className="w-[90%] sm:w-1/2 max-w-[800px]">
        <Post postId={params.id} />
      </section>
    </div>
  );
}
