'use client';

import { IUser } from '@/lib/user/types';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FieldErrors, useForm } from 'react-hook-form';

interface ISignInForm extends Pick<IUser, 'loginId' | 'password'> {}

function InputFieldWrapper(props: { children: React.ReactNode }) {
  return (
    <div className="flex w-full flex-col items-start justify-center gap-[5px]">
      {props.children}
    </div>
  );
}

export default function SignInForm() {
  const {
    register,
    formState: { errors },
    watch,
    reset,
    handleSubmit,
    getValues,
    setError,
    setFocus,
  } = useForm<ISignInForm>({
    mode: 'onBlur',
    defaultValues: {
      loginId: '',
      password: '',
    },
  });
  const router = useRouter();
  const [isLoginFailed, setIsLoginFailed] = useState(false);

  async function onValid(data: ISignInForm) {
    const res = await signIn('credentials', {
      loginId: data.loginId,
      password: data.password,
      redirect: false,
    });
    if (res?.error) {
      setIsLoginFailed(true);
    } else {
      router.push('/');
      router.refresh();
    }
  }

  function onInvalid(errors: FieldErrors<ISignInForm>) {}

  return (
    <form
      className="mt-[80px] flex w-full flex-col items-center gap-[30px] border border-gray-300 px-[30px] py-[20px]"
      onSubmit={handleSubmit(onValid, onInvalid)}
    >
      <h1 className="mb-10 text-xxlg font-extrabold">로그인</h1>

      {/* 아이디 입력 */}
      <InputFieldWrapper>
        <label htmlFor="loginId" className="text-m font-bold">
          아이디
        </label>
        <input
          id="loginId"
          className="w-full border border-primary px-[10px] py-[10px] text-m"
          {...register('loginId')}
        />
      </InputFieldWrapper>

      {/* 비밀번호 입력 */}
      <InputFieldWrapper>
        <label htmlFor="password" className="text-m font-bold">
          비밀번호
        </label>
        <input
          id="password"
          type="password"
          className="w-full border border-primary px-[10px] py-[10px] text-m"
          {...register('password')}
        />
      </InputFieldWrapper>

      {/* 로그인 오류 메세지 */}
      {isLoginFailed && (
        <span className="text-m text-red-600">
          아이디 혹은 비밀번호가 일치하지 않습니다.
        </span>
      )}

      {/* 하단 버튼 */}
      <div className="flex w-full items-center justify-end">
        <button
          type="submit"
          className="rounded-[10px] bg-primary px-[8px] py-[4px] text-m text-white"
        >
          로그인
        </button>
      </div>
    </form>
  );
}
