import PostTableContent from '@/components/molecules/post-table-content';
import PostTopInfo from '@/components/molecules/post-top-info';
import { getPostData } from '@/lib/post';

export interface IPostContext {
  postId: number;
}

export default async function PostContext(props: IPostContext) {
  const postData = await getPostData(props.postId);

  return (
    <article className="w-full">
      <PostTopInfo
        title={postData.title}
        author={postData.name}
        date={postData.date}
      />
      <PostTableContent content={postData.content} />
    </article>
  );
}
