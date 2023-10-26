'use client';

import { IPostLike } from '@/lib/post-like/types';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function PostLikeBar(
  props: Omit<IPostLike, 'id' | 'like' | 'post' | 'users'>,
) {
  const { postId } = props;

  const router = useRouter();

  const [likeCount, setLikeCount] = useState<number>(0);
  const [likedUserIds, setLikedUserIds] = useState<number[]>([]);

  const postLikeQuery = useQuery({
    queryKey: ['get-post-like', postId],
    queryFn: async () => {
      const result = await fetch(`/api/post/like/${postId}`);
      const body: Omit<IPostLike, 'id' | 'post'> = await result.json();

      setLikeCount(body.like);
      setLikedUserIds(body.users.map((user) => user.id));

      return body;
    },
    cacheTime: 0,
    staleTime: 0,
  });

  const queryClient = useQueryClient();
  const likeMutation = useMutation({
    mutationFn: async (updatedLikeCount: number) => {
      const session = await getSession();

      const result = await fetch(`/api/post/like/${postId}`, {
        method: 'POST',
        body: JSON.stringify({
          userId: session?.user.id,
          like: updatedLikeCount,
        }),
      });
    },
    onMutate: async (updatedLikeCount) => {
      await queryClient.cancelQueries({ queryKey: ['post-like'] });

      const prevPostLikeCount = queryClient.getQueryData(['post-like']);
      queryClient.setQueryData(['post-like'], updatedLikeCount);

      return { prevPostLikeCount, updatedLikeCount };
    },
    onError: (err, updatedLikeCount, context) => {
      queryClient.setQueryData(['post-like'], context?.prevPostLikeCount);
    },
    onSettled: (updatedLikeCount) => {
      queryClient.invalidateQueries({ queryKey: ['post-like'] });
    },
  });

  async function handleLikeButton() {
    const session = await getSession();

    if (!session) {
      alert('로그인 후 좋아요를 누르실 수 있습니다.');
      router.push('/sign-in');
      return;
    }

    if (likedUserIds.includes(session.user.id)) {
      alert('이미 좋아요를 누른 게시글입니다.');
      return;
    }

    const newLike = likeCount + 1;
    setLikeCount(newLike);
    setLikedUserIds([...likedUserIds, session!.user.id]);
    likeMutation.mutate(newLike);
  }

  return (
    <div className="mt-[50px] flex items-center justify-center gap-5">
      {postLikeQuery.isFetching || (
        <button
          className="flex items-center rounded-[10px] border border-solid border-red-400 px-5 py-3 text-m font-bold text-red-400"
          onClick={() => handleLikeButton()}
        >
          {`좋아요 ${likeCount}`}
        </button>
      )}
    </div>
  );
}
