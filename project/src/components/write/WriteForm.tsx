'use client';

import { useQuery } from '@tanstack/react-query';
import { getSession, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FieldErrors, useForm } from 'react-hook-form';

interface IWriteForm {
  title: string;
  content: string;
}

export default function WriteForm() {
  const {
    register,
    formState: { errors },
    watch,
    reset,
    handleSubmit,
    getValues,
    setError,
    setFocus,
  } = useForm<IWriteForm>({
    mode: 'onSubmit',
    defaultValues: {
      title: '',
      content: '',
    },
  });
  const router = useRouter();
  const user = useQuery(['session'], async () => {
    const session = await getSession();
    return session?.user;
  });

  const [isUploading, setIsUploading] = useState(false);

  async function onValid(data: IWriteForm) {
    setIsUploading(true);
    const res = await fetch('/api/write', {
      method: 'POST',
      body: JSON.stringify({ ...data, userId: user.data?.id }),
    });

    router.push('/board');
    router.refresh();
  }
  function onInvalid(errors: FieldErrors<IWriteForm>) {}

  return (
    <form
      className="flex w-full flex-col gap-10 border border-solid px-[30px] py-[50px]"
      onSubmit={handleSubmit(onValid, onInvalid)}
    >
      <h1 className="mb-10 flex justify-center text-xxlg font-extrabold">
        글쓰기
      </h1>

      <div className="flex w-full flex-col gap-1">
        <input
          placeholder="제목을 입력해 주세요."
          className="border border-primary px-[10px] py-[10px] text-m font-bold"
          {...register('title', {
            required: '제목을 입력해 주세요.',
          })}
        />
        <span className="font-bold text-red-500">{errors.title?.message}</span>
      </div>

      <div className="flex w-full flex-col gap-1">
        {' '}
        <textarea
          placeholder="내용을 입력해 주세요."
          className="h-[300px] resize-none border border-primary px-[10px] py-[10px] text-m font-bold focus:outline-none"
          {...register('content', {
            required: '내용을 입력해 주세요.',
          })}
        />
        <span className="font-bold text-red-500">
          {errors.content?.message}
        </span>
      </div>

      <button
        type="submit"
        className="rounded-[30px] bg-primary py-[5px] text-m text-white"
        disabled={isUploading}
      >
        글쓰기
      </button>
    </form>
  );
}
