import PostContext from '@/components/organisms/post-context';

export default async function PostEachPage({
  params,
}: {
  params: { post_id: number };
}) {
  return (
    <div className="flex justify-center w-full mt-40">
      <div className="w-1/2 h-auto border border-solid border-black">
        <PostContext postId={params.post_id} />
      </div>
    </div>
  );
}
