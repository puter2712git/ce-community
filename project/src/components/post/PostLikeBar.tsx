'use client';

import { IPostLike } from '@/lib/post-like/types';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function PostLikeBar(
  props: Omit<IPostLike, 'id' | 'like' | 'post' | 'users'>,
) {
  const { postId } = props;

  const session = useSession();
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
    staleTime: 0,
  });

  const queryClient = useQueryClient();
  const likeMutation = useMutation({
    mutationFn: async (updatedLikeCount: number) => {
      const result = await fetch(`/api/post/like/${postId}`, {
        method: 'POST',
        body: JSON.stringify({
          userId: session.data?.user.id,
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

  function handleLikeButton() {
    const newLike = likeCount + 1;
    setLikeCount(newLike);
    setLikedUserIds([...likedUserIds, session.data!.user.id]);
    likeMutation.mutate(newLike);
  }

  return (
    <div className="mt-[50px] flex items-center justify-center gap-5">
      {(session.status === 'loading' && postLikeQuery.isFetching) || (
        <button
          className="flex items-center rounded-[10px] border border-solid border-red-400 px-5 py-3 text-m font-bold text-red-400"
          disabled={
            session.status === 'unauthenticated' ||
            likedUserIds.includes(session.data!.user.id)
          }
          onClick={() => handleLikeButton()}
        >
          {`좋아요 ${likeCount}`}
        </button>
      )}
    </div>
  );
}
