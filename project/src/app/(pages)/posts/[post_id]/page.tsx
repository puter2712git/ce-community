import { getPostData } from '@/lib/post';

export default async function PostOfId({
  params,
}: {
  params: { post_id: number };
}) {
  const postDatas = await getPostData(params.post_id);
  const postData = postDatas[0];

  return (
    <div>
      {postData.title} {postData.content} {postData.date}
    </div>
  );
}
