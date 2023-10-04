import { IPost } from '@/app/api/posts/route';

export async function getPosts(beginId: number, endId: number) {
  const response = await fetch(`${process.env.COMMUNITY_URL}/api/post`, {
    method: 'POST',
    body: JSON.stringify({ begin: beginId, end: endId }),
  });
  const posts = (await response.json()) as IPost[];

  return posts;
}
