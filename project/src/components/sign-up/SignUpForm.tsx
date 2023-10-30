'use client';

import { IUser } from '@/lib/user/types';
import { useRouter } from 'next/navigation';
import { FieldErrors, useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/ReactToastify.css';

interface ISignUpForm extends Omit<IUser, 'id' | 'posts'> {
  passwordCheck: string;
}

function InputFieldWrapper(props: { children: React.ReactNode }) {
  return (
    <div className="flex w-full flex-col items-start justify-center gap-[5px]">
      {props.children}
    </div>
  );
}

export default function SignUpForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm<ISignUpForm>({
    mode: 'onBlur',
    defaultValues: {
      email: '',
      loginId: '',
      password: '',
      passwordCheck: '',
      nickname: '',
    },
  });
  const router = useRouter();

  async function onValid(data: ISignUpForm) {
    const res = await fetch('/api/auth/sign-up', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    alert('회원가입 완료! 로그인 후 이용해 주세요!');
    router.push('sign-in');
  }
  function onInvalid(errors: FieldErrors<ISignUpForm>) {
    toast.warn('오류가 존재합니다.');
  }

  return (
    <form
      className="mt-[80px] flex w-full flex-col items-center gap-[30px] border border-gray-300 px-[30px] py-[20px]"
      onSubmit={handleSubmit(onValid, onInvalid)}
    >
      <h1 className="mb-10 text-xxlg font-extrabold">회원가입</h1>

      {/* 닉네임 입력 */}
      <InputFieldWrapper>
        <label htmlFor="nickname" className="text-m font-bold">
          닉네임
        </label>
        <input
          id="nickname"
          placeholder="닉네임: example"
          className="w-full border border-primary px-[10px] py-[10px] text-m"
          {...register('nickname', {
            required: '닉네임은 필수 항목입니다.',
            minLength: {
              value: 2,
              message: '닉네임은 2~8자 이내로 입력해야 합니다.',
            },
            maxLength: {
              value: 8,
              message: '닉네임은 2~8자 이내로 입력해야 합니다.',
            },
          })}
        />
        <span className="font-bold text-red-500">
          {errors.nickname?.message}
        </span>
      </InputFieldWrapper>

      {/* 아이디 입력 */}
      <InputFieldWrapper>
        <label htmlFor="loginId" className="text-m font-bold">
          아이디
        </label>
        <input
          id="loginId"
          placeholder="ID: example"
          className="w-full border border-primary px-[10px] py-[10px] text-m"
          {...register('loginId', {
            required: '아이디는 필수 항목입니다.',
            minLength: {
              value: 4,
              message: '아이디는 4~20자 이내로 입력해야 합니다.',
            },
            maxLength: {
              value: 20,
              message: '아이디는 4~20자 이내로 입력해야 합니다.',
            },
          })}
        />
        <span className="font-bold text-red-500">
          {errors.loginId?.message}
        </span>
      </InputFieldWrapper>

      {/* 비밀번호 입력 */}
      <InputFieldWrapper>
        <label htmlFor="password" className="text-m font-bold">
          비밀번호
        </label>
        <input
          id="password"
          type="password"
          placeholder="Password: **********"
          className="w-full border border-primary px-[10px] py-[10px] text-m"
          {...register('password', {
            required: '비밀번호는 필수 항목입니다.',
            minLength: {
              value: 8,
              message: '비밀번호는 8자 이상 입력해야 합니다.',
            },
          })}
        />
        <span className="font-bold text-red-500">
          {errors.password?.message}
        </span>
      </InputFieldWrapper>

      {/* 비밀번호 확인용 입력 */}
      <InputFieldWrapper>
        <label htmlFor="password-check" className="text-m font-bold">
          비밀번호 확인
        </label>
        <input
          id="password-check"
          type="password"
          className="w-full border border-primary px-[10px] py-[10px] text-m"
          {...register('passwordCheck', {
            validate: (value) =>
              value === getValues('password') ||
              '비밀번호가 일치하지 않습니다.',
          })}
        />
        <span className="font-bold text-red-500">
          {errors.passwordCheck?.message}
        </span>
      </InputFieldWrapper>

      {/* 이메일 입력 */}
      <InputFieldWrapper>
        <label htmlFor="email" className="text-m font-bold">
          이메일 (선택사항)
        </label>
        <input
          id="email"
          type="email"
          placeholder="example@example.com"
          className="w-full border border-primary px-[10px] py-[10px] text-m"
          {...register('email', {
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
              message: '잘못된 이메일 형식입니다.',
            },
          })}
        />
        <span className="font-bold text-red-500">{errors.email?.message}</span>
      </InputFieldWrapper>

      {/* 하단 버튼 */}
      <div className="flex w-full items-center justify-end">
        <button
          type="submit"
          className="rounded-[10px] bg-primary px-[8px] py-[4px] text-m text-white"
        >
          회원가입
        </button>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick={true}
        theme="light"
      />
    </form>
  );
}
