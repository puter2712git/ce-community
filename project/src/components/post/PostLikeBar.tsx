'use client';

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

  const { mutate: updateLikeMutate } = useMutation(async () => {
    const res = await fetch('/api/post/like', {
      method: 'POST',
      body: JSON.stringify({
        postId: props.postId,
        like: likeCount,
        dislike: dislikeCount,
      }),
    });
  });

  function handleLikeButton() {
    setLikeCount((like) => like + 1);
    updateLikeMutate();
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
