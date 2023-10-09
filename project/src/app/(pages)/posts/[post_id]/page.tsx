import PostContextTemplate from '@/components/templates/each-post';

export default async function PostEachPage({
  params,
}: {
  params: { post_id: number };
}) {
  return <PostContextTemplate postId={params.post_id} />;
}
