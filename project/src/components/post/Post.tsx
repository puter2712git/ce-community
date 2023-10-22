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
    <article className="flex flex-col w-full px-[30px] py-[50px] gap-20 border border-solid">
      <div className="space-y-5">
        <h1 className="font-extrabold text-xxlg">제목</h1>
        <div className="w-full text-m px-5 py-5 border border-solid border-primary">
          {postData.title}
        </div>
      </div>
      <div className="space-y-5">
        <h1 className="font-extrabold text-xxlg">내용</h1>
        <div className="w-full min-h-[100px] text-m px-5 py-5 border border-solid border-primary">
          {postData.content}
        </div>
      </div>
    </article>
  );
}
