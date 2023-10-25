import Link from 'next/link';
import PostLikeBar from './PostLikeBar';
import { IPost } from '@/lib/post/types';
import { getFormattedDate } from '@/lib/utils';

async function getPost(postId: number) {
  const res = await fetch(`${process.env.COMMUNITY_URL}/api/post`, {
    method: 'POST',
    body: JSON.stringify({ postId: postId }),
    cache: 'no-store',
  });
  const data = await res.json();

  return data;
}

export default async function Post({ postId }: { postId: number }) {
  const postData: IPost = await getPost(postId);
  const date = getFormattedDate(postData.date);

  return (
    <article className="flex w-full flex-col border border-solid px-[30px] py-[50px]">
      <div className="border-b">
        <div className="w-full text-xlg font-bold">{postData.title}</div>
      </div>
      <div className="mt-[20px] flex justify-between border-b text-lg">
        <Link
          className="text-primary hover:underline"
          href={`/avatar/${postData.author.loginId}`}
        >
          {postData.author.nickname}
        </Link>
        <div>{date}</div>
      </div>
      <div className="mt-[50px]">
        <div className="min-h-[100px] w-full border border-solid border-primary px-5 py-5 text-m">
          {postData.content}
        </div>
      </div>
      <PostLikeBar
        postId={postData.like.postId}
        like={postData.like.like}
        dislike={postData.like.dislike}
      />
    </article>
  );
}
