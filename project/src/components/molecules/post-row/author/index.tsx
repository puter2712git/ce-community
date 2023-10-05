interface PostRawAuthorProps {
  user_id: number;
}

export default async function PostRowAuthor(props: PostRawAuthorProps) {
  const response = await fetch(`${process.env.COMMUNITY_URL}/api/posts`, {
    method: 'POST',
    body: JSON.stringify({ id: props.user_id }),
  });
  const data = await response.json();
  console.log(data);

  return data[0].name;
}
