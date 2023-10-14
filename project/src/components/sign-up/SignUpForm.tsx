'use client';

import { FieldErrors, useForm } from 'react-hook-form';

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
  } = useForm<ISignUpForm>();

  async function onValid(data: ISignUpForm) {
    const res = await fetch('/api/auth/sign-up', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    console.log(res);
  }
  function onInvalid(errors: FieldErrors<ISignUpForm>) {}

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
          {...register('nickname')}
        />
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
          placeholder="Password: 12~20자"
          className="w-full px-[10px] py-[10px] border border-primary text-m"
          {...register('password')}
        />
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
          {...register('passwordCheck')}
        />
      </InputFieldWrapper>

      {/* 이메일 입력 */}
      <InputFieldWrapper>
        <label htmlFor="email" className="font-bold text-m">
          이메일
        </label>
        <input
          id="email"
          type="email"
          placeholder="example@example.com"
          className="w-full px-[10px] py-[10px] border border-primary text-m"
          {...register('email')}
        />
      </InputFieldWrapper>

      {/* 하단 버튼 */}
      <div className="flex justify-between items-center w-full">
        <button className="text-white text-m bg-gray-400 rounded-[10px] px-[8px] py-[4px]">
          뒤로가기
        </button>
        <button
          type="submit"
          className="text-white text-m bg-primary rounded-[10px] px-[8px] py-[4px]"
        >
          회원가입
        </button>
      </div>
    </form>
  );
}
