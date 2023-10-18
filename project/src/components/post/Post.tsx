interface IPost {
  postId: number;
}

interface IPostData {
  id: number;
  title: string;
  date: string;
  content: string;
  like: number;
  author: { nickname: string };
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

  return (
    <article className="flex flex-col w-full gap-10">
      <div className="w-full text-m px-5 py-5 border border-solid">
        {postData.title}
      </div>
      <div className="w-full text-m px-5 py-5 border border-solid">
        {postData.content}
      </div>
    </article>
  );
}
