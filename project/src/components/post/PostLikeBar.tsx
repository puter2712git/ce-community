'use client';

import getQueryClient from '@/lib/getQueryClient';
import { useMutation } from '@tanstack/react-query';
import { MouseEventHandler, TouchEventHandler, useState } from 'react';

interface IPostLikeBar {
  postId: number;
  like: number;
  dislike: number;
}

export default function PostLikeBar(props: IPostLikeBar) {
  const { like, dislike } = props;

  const [likeCount, setLikeCount] = useState(like);
  const [dislikeCount, setDislikeCount] = useState(dislike);

  const queryClient = getQueryClient();

  const { mutate: updateLikeMutate } = useMutation(
    async (newLikeCount: number) => {
      const res = await fetch('/api/post/like', {
        method: 'POST',
        body: JSON.stringify({
          postId: props.postId,
          like: newLikeCount,
          dislike: dislikeCount,
        }),
      });
      const data = await res.json();
      return data;
    },
    {
      onMutate: async (newLikeCount: number) => {
        queryClient.cancelQueries(['post-like']);

        const prevLike: number | undefined = queryClient.getQueryData([
          'post-like',
        ]);
        queryClient.setQueryData(['post-like'], newLikeCount);

        console.log(`mutate: ${newLikeCount}`);

        return { prevLike };
      },
      onError: (error, newLike, context) => {
        console.log(`error: ${error} ${newLike} ${context}`);
        if (context?.prevLike) {
          queryClient.setQueryData(['post-like'], context.prevLike);
          console.warn('Update failed');
        }
      },
      onSuccess: (like: number) => {
        console.log(like);
        if (!isNaN(like)) {
          console.log('Update successed!');
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries(['post-like']);
        console.log(`settle: ${likeCount}`);
      },
    },
  );

  function handleLikeButton() {
    const newLike = likeCount + 1;
    setLikeCount(newLike);
    updateLikeMutate(newLike);
  }

  return (
    <div className="flex justify-center items-center mt-[50px] gap-5">
      <button
        className="flex items-center text-m font-bold text-red-400 px-5 py-3 border border-solid border-red-400 rounded-[10px]"
        onClick={() => handleLikeButton()}
      >
        {`좋아요 ${likeCount}`}
      </button>
      <button className="flex items-center text-m font-bold text-blue-400 px-5 py-3 border border-solid border-blue-400 rounded-[10px]">
        {`싫어요 ${dislikeCount}`}
      </button>
    </div>
  );
}
