'use client';

import { useQuery } from '@tanstack/react-query';
import { getSession, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
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

  async function onValid(data: IWriteForm) {
    const res = await fetch('/api/write', {
      method: 'POST',
      body: JSON.stringify({ ...data, userId: user.data?.id }),
    });
    router.push('board');
  }
  function onInvalid(errors: FieldErrors<IWriteForm>) {}

  return (
    <form
      className="flex flex-col w-full px-[30px] py-[50px] gap-10 border border-solid"
      onSubmit={handleSubmit(onValid, onInvalid)}
    >
      <h1 className="flex justify-center font-extrabold text-xxlg mb-10">
        글쓰기
      </h1>

      <div className="flex flex-col w-full gap-1">
        <input
          placeholder="제목을 입력해 주세요."
          className="font-bold text-m px-[10px] py-[10px] border border-primary"
          {...register('title', {
            required: '제목을 입력해 주세요.',
          })}
        />
        <span className="text-red-500 font-bold">{errors.title?.message}</span>
      </div>

      <div className="flex flex-col w-full gap-1">
        {' '}
        <textarea
          placeholder="내용을 입력해 주세요."
          className="font-bold text-m px-[10px] py-[10px] border border-primary resize-none h-[300px] focus:outline-none"
          {...register('content', {
            required: '내용을 입력해 주세요.',
          })}
        />
        <span className="text-red-500 font-bold">
          {errors.content?.message}
        </span>
      </div>

      <button
        type="submit"
        className="bg-primary py-[5px] rounded-[30px] text-white text-m"
      >
        글쓰기
      </button>
    </form>
  );
}
