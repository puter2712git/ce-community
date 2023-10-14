'use client';

import {
  useForm,
  FieldErrors,
  SubmitErrorHandler,
  FieldError,
} from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css';

import Button from '@/components/atoms/Button';
import Input from '@/components/atoms/Input';

interface HookFormType {
  name: string;
  email: string;
  password: string;
}

export default function SignUpForm() {
  const {
    register,
    watch,
    handleSubmit,
    setValue,
    formState: { errors },
    setError,
  } = useForm<HookFormType>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
    mode: 'onSubmit',
  });
  const router = useRouter();

  async function onValid(data: HookFormType) {
    fetch('/api/auth/sign-up', {
      method: 'POST',
      body: JSON.stringify(data),
    }).then((res) => {
      alert('회원가입 완료! 로그인 후 이용해 주세요!');
      router.push('sign-in');
    });
  }

  function onInvalid(errors: FieldErrors<HookFormType>) {
    toast.warn(errors.email?.message);
    toast.warn(errors.name?.message);
    toast.warn(errors.password?.message);
  }

  return (
    <>
      <form
        className="flex flex-col items-center w-full h-auto gap-5"
        onSubmit={handleSubmit(onValid, onInvalid)}
      >
        <Input
          id="name"
          type="name"
          placeholder="닉네임"
          variant="primary"
          fontSize="xlarge"
          {...register('name', {
            required: '닉네임은 필수 항목입니다.',
            maxLength: {
              value: 12,
              message: '닉네임은 12글자 이하여야 합니다.',
            },
          })}
        />
        <Input
          id="email"
          placeholder="example@ajou.ac.kr"
          variant="primary"
          fontSize="xlarge"
          {...register('email', {
            required: '이메일은 필수 항목입니다.',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
              message: '잘못된 이메일 형식입니다.',
            },
          })}
        />
        <Input
          id="password"
          type="password"
          placeholder="***********"
          variant="primary"
          fontSize="xlarge"
          {...register('password', {
            required: '비밀번호는 필수 항목입니다.',
            minLength: {
              value: 8,
              message: '비밀번호는 8자 이상이여야 합니다.',
            },
            maxLength: {
              value: 20,
              message: '비밀번호는 20자 이하여야 합니다.',
            },
          })}
        />
        <Button variant="primary" fontSize="large">
          회원가입
        </Button>
      </form>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick={true}
        theme="light"
      />
    </>
  );
}
