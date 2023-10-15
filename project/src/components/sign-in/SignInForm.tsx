'use client';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FieldErrors, useForm } from 'react-hook-form';

interface ISignInForm {
  loginId: string;
  password: string;
}

function InputFieldWrapper(props: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col justify-center items-start w-full gap-[5px]">
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

  async function onValid(data: ISignInForm) {
    const res = await signIn('credentials', {
      loginId: data.loginId,
      password: data.password,
      redirect: false,
    });
  }

  function onInvalid(errors: FieldErrors<ISignInForm>) {}

  return (
    <form
      className="flex flex-col items-center gap-[30px] w-full border border-gray-300 px-[30px] py-[20px] mt-[80px]"
      onSubmit={handleSubmit(onValid, onInvalid)}
    >
      <h1 className="font-extrabold text-xxlg mb-10">로그인</h1>

      {/* 아이디 입력 */}
      <InputFieldWrapper>
        <label htmlFor="loginId" className="font-bold text-m">
          아이디
        </label>
        <input
          id="loginId"
          className="w-full px-[10px] py-[10px] border border-primary text-m"
          {...register('loginId')}
        />
      </InputFieldWrapper>

      {/* 비밀번호 입력 */}
      <InputFieldWrapper>
        <label htmlFor="password" className="font-bold text-m">
          비밀번호
        </label>
        <input
          id="password"
          type="password"
          className="w-full px-[10px] py-[10px] border border-primary text-m"
          {...register('password')}
        />
      </InputFieldWrapper>

      {/* 하단 버튼 */}
      <div className="flex justify-end items-center w-full">
        <button
          type="submit"
          className="text-white text-m bg-primary rounded-[10px] px-[8px] py-[4px]"
        >
          로그인
        </button>
      </div>
    </form>
  );
}
