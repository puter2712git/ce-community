import PostTableContent from '@/components/molecules/post-table-content';
import PostTopInfo from '@/components/molecules/post-top-info';
import { getPostData } from '@/lib/post';

export interface IPostContext {
  postId: number;
}

export default async function PostContext(props: IPostContext) {
  const postData = await getPostData(props.postId);
  const formattedDate = new Date(postData.date);
  postData.date = `${formattedDate.getFullYear()}.${(
    formattedDate.getMonth() + 1
  )
    .toString()
    .padStart(2, '0')}.${formattedDate.getDate().toString().padStart(2, '0')}
  `;

  return (
    <article className="w-full">
      <PostTopInfo
        title={postData.title}
        author={postData.author.name}
        date={postData.date}
      />
      <PostTableContent content={postData.content} />
    </article>
  );
}
