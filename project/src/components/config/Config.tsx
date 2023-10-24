'use client';

import { IUser } from '@/lib/user/types';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FieldErrors, useForm } from 'react-hook-form';

interface IConfigForm extends Omit<IUser, 'id' | 'posts'> {}

export default function Config() {
  const session = useSession();
  const {
    register,
    formState: { errors },
    watch,
    reset,
    handleSubmit,
    getValues,
    setError,
    setFocus,
  } = useForm<IConfigForm>({
    mode: 'onBlur',
    defaultValues: {
      nickname: '',
      email: '',
      loginId: '',
      password: '',
    },
    values: {
      nickname: session.data?.user.nickname || '',
      email: session.data?.user.email || '',
      loginId: session.data?.user.loginId || '',
      password: '',
    },
  });
  const [errorMsg, setErrorMsg] = useState('');
  const router = useRouter();

  async function onValid(data: IConfigForm) {
    try {
      const res = await fetch('/api/config', {
        method: 'POST',
        body: JSON.stringify(data),
      });
      const body = await res.json();

      if (body.status === 500) {
        throw new Error(body.message);
      }

      session.update({
        ...session.data,
        user: {
          ...session.data?.user,
          ...data,
        },
      });
      alert('유저 정보가 변경되었습니다.');
      router.push('/');
      router.refresh();
    } catch (err) {
      setErrorMsg((err as Error).message);
    }
  }

  function onInvalid(errors: FieldErrors<IConfigForm>) {}

  return (
    <>
      {session.status === 'authenticated' && (
        <form
          className="flex flex-col px-[30px] py-[50px] border border-solid"
          onSubmit={handleSubmit(onValid, onInvalid)}
        >
          <div className="flex flex-col w-full gap-10">
            <div className="flex justify-between items-center space-x-10">
              <label className="text-m font-bold">닉네임</label>
              <input
                className="w-1/2 font-bold text-m px-[10px] py-[10px] border border-primary"
                {...register('nickname')}
              />
            </div>
            <div className="flex justify-between items-center space-x-10">
              <label className="text-m font-bold">아이디</label>
              <input
                className="w-1/2 font-bold text-m px-[10px] py-[10px] border border-primary hover:cursor-not-allowed"
                disabled
                {...register('loginId')}
              />
            </div>
            <div className="flex justify-between items-center space-x-10">
              <label className="text-m font-bold">이메일</label>
              <input
                className="w-1/2 font-bold text-m px-[10px] py-[10px] border border-primary"
                {...register('email')}
              />
            </div>
            <div className="flex justify-between items-center space-x-10">
              <label className="text-m font-bold">비밀번호 확인</label>
              <input
                type="password"
                className="w-1/2 font-bold text-m px-[10px] py-[10px] border border-primary"
                {...register('password')}
              />
            </div>
            <button
              type="submit"
              className="w-full font-bold text-m py-[5px] bg-primary text-white rounded-[10px]"
            >
              수정
            </button>
            <span className="text-red-600 text-m">{errorMsg}</span>
          </div>
        </form>
      )}
    </>
  );
}
