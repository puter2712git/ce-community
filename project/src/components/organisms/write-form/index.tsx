'use client';

import Button from '@/components/atoms/Button';
import Input from '@/components/atoms/Input';
import { useForm } from 'react-hook-form';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function WriteForm() {
  const { register, handleSubmit } = useForm();
  const session = useSession();
  const router = useRouter();

  console.log(session);

  return (
    <form
      className="flex flex-col items-center w-full gap-5"
      onSubmit={handleSubmit(async (data) => {
        fetch('/api/write', {
          method: 'POST',
          body: JSON.stringify({
            title: data.title,
            content: data.content,
            userId: session.data?.user.id,
          }),
        });

        router.push('/posts');
      })}
    >
      <Input
        variant="primary"
        outline={true}
        fontSize="medium"
        placeholder="제목"
        className="w-full rounded-xl px-5 py-3"
        {...register('title')}
      />
      <textarea
        className="w-full h-80 text-m bg-white resize-none px-5 py-5 border border-primary border-solid rounded-xl focus:outline-none"
        placeholder="내용"
        {...register('content')}
      />
      <Button
        type="submit"
        variant="primary"
        outline={false}
        fontSize="medium"
        className="w-full text-white"
      >
        등록
      </Button>
    </form>
  );
}
