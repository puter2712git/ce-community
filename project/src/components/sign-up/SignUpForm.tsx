'use client';

import { useRouter } from 'next/navigation';
import { FieldErrors, useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/ReactToastify.css';

interface ISignUpForm {
  nickname: string;
  loginId: string;
  password: string;
  passwordCheck: string;
  email: string;
}

function InputFieldWrapper(props: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col justify-center items-start w-full gap-[5px]">
      {props.children}
    </div>
  );
}

export default function SignUpForm() {
  const {
    register,
    formState: { errors },
    watch,
    reset,
    handleSubmit,
    getValues,
    setError,
    setFocus,
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
      className="flex flex-col items-center gap-[30px] w-full border border-gray-300 px-[30px] py-[20px] mt-[80px]"
      onSubmit={handleSubmit(onValid, onInvalid)}
    >
      <h1 className="font-extrabold text-xxlg mb-10">회원가입</h1>

      {/* 닉네임 입력 */}
      <InputFieldWrapper>
        <label htmlFor="nickname" className="font-bold text-m">
          닉네임
        </label>
        <input
          id="nickname"
          placeholder="닉네임: 2~8자"
          className="w-full px-[10px] py-[10px] border border-primary text-m"
          {...register('nickname', {
            required: '닉네임은 필수 항목입니다.',
            minLength: {
              value: 2,
              message: '닉네임은 2~8자 이내로 입력해야 합니다.',
            },
          })}
        />
        <span className="text-red-500 font-bold">
          {errors.nickname?.message}
        </span>
      </InputFieldWrapper>

      {/* 아이디 입력 */}
      <InputFieldWrapper>
        <label htmlFor="loginId" className="font-bold text-m">
          아이디
        </label>
        <input
          id="loginId"
          placeholder="ID: 8~16자"
          className="w-full px-[10px] py-[10px] border border-primary text-m"
          {...register('loginId', {
            required: '아이디는 필수 항목입니다.',
            minLength: {
              value: 8,
              message: '아이디는 8~16자 이내로 입력해야 합니다.',
            },
            maxLength: {
              value: 16,
              message: '아이디는 8~16자 이내로 입력해야 합니다.',
            },
          })}
        />
        <span className="text-red-500 font-bold">
          {errors.loginId?.message}
        </span>
      </InputFieldWrapper>

      {/* 비밀번호 입력 */}
      <InputFieldWrapper>
        <label htmlFor="password" className="font-bold text-m">
          비밀번호
        </label>
        <input
          id="password"
          type="password"
          placeholder="Password: 12~20자"
          className="w-full px-[10px] py-[10px] border border-primary text-m"
          {...register('password', {
            required: '비밀번호는 필수 항목입니다.',
            minLength: {
              value: 12,
              message: '비밀번호는 12~16자 이내로 입력해야 합니다.',
            },
            maxLength: {
              value: 16,
              message: '비밀번호는 12~16자 이내로 입력해야 합니다.',
            },
          })}
        />
        <span className="text-red-500 font-bold">
          {errors.password?.message}
        </span>
      </InputFieldWrapper>

      {/* 비밀번호 확인용 입력 */}
      <InputFieldWrapper>
        <label htmlFor="password-check" className="font-bold text-m">
          비밀번호 확인
        </label>
        <input
          id="password-check"
          type="password"
          className="w-full px-[10px] py-[10px] border border-primary text-m"
          {...register('passwordCheck', {
            validate: (value) =>
              value === getValues('password') ||
              '비밀번호가 일치하지 않습니다.',
          })}
        />
        <span className="text-red-500 font-bold">
          {errors.passwordCheck?.message}
        </span>
      </InputFieldWrapper>

      {/* 이메일 입력 */}
      <InputFieldWrapper>
        <label htmlFor="email" className="font-bold text-m">
          이메일 (선택사항)
        </label>
        <input
          id="email"
          type="email"
          placeholder="example@example.com"
          className="w-full px-[10px] py-[10px] border border-primary text-m"
          {...register('email', {
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
              message: '잘못된 이메일 형식입니다.',
            },
          })}
        />
        <span className="text-red-500 font-bold">{errors.email?.message}</span>
      </InputFieldWrapper>

      {/* 하단 버튼 */}
      <div className="flex justify-end items-center w-full">
        <button
          type="submit"
          className="text-white text-m bg-primary rounded-[10px] px-[8px] py-[4px]"
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
