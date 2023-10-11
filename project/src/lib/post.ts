export async function getPostData(id: number) {
  const res = await fetch(`${process.env.COMMUNITY_URL}/api/each-post`, {
    method: 'POST',
    body: JSON.stringify({ postId: id }),
  });
  const data = await res.json();

  return data;
}
