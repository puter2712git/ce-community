export async function getPostData(id: number) {
  const res = await fetch('http://localhost:3000/api/post', {
    method: 'POST',
    body: JSON.stringify({ id: id }),
  });
  const data = await res.json();

  return data;
}
