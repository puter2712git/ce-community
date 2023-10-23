import Link from 'next/link';
import PostLikeBar from './PostLikeBar';

interface IPost {
  postId: number;
}

interface IPostData {
  id: number;
  title: string;
  date: string;
  content: string;
  like: {
    like: number;
    dislike: number;
    postId: number;
  };
  author: {
    nickname: string;
    loginId: string;
  };
}

async function getPost(postId: number) {
  const res = await fetch(`${process.env.COMMUNITY_URL}/api/post`, {
    method: 'POST',
    body: JSON.stringify({ postId: postId }),
  });
  const data = await res.json();

  return data;
}

export default async function Post(props: IPost) {
  const { postId } = props;
  const postData: IPostData = await getPost(postId);

  const date = new Date(postData.date);
  postData.date = `${date.getFullYear()}.${(date.getMonth() + 1)
    .toString()
    .padStart(2, '0')}.${date.getDate().toString().padStart(2, '0')}`;

  return (
    <article className="flex flex-col w-full px-[30px] py-[50px] border border-solid">
      <div className="border-b">
        <div className="w-full text-xlg font-bold">{postData.title}</div>
      </div>
      <div className="flex justify-between border-b text-lg mt-[20px]">
        <Link
          className="text-primary hover:underline"
          href={`/avatar/${postData.author.loginId}`}
        >
          {postData.author.nickname}
        </Link>
        <div>{postData.date}</div>
      </div>
      <div className="mt-[50px]">
        <div className="w-full min-h-[100px] text-m px-5 py-5 border border-solid border-primary">
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
