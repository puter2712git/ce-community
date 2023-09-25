interface Post {
  author: string;
  title: string;
  content: string;
}

export default async function Board() {
  const res = await fetch('http://localhost:3000/api/board', {
    method: 'GET',
  });
  const postDB: {
    id: number;
    title: string;
    content: string;
    user_id: string;
  }[] = await res.json();

  let posts: Post[] = [];

  for (const post of postDB) {
    const userRes = await fetch('http://localhost:3000/api/board', {
      method: 'POST',
      body: JSON.stringify({ id: post.user_id }),
    });
    const user = await userRes.json();

    posts.push({
      author: user[0].name,
      title: post.title,
      content: post.content,
    });
  }

  return (
    <ul>
      {posts.map((post, index) => (
        <li key={index}>
          {post.author} {post.title} {post.title}
        </li>
      ))}
    </ul>
  );
}
